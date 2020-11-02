import subprocess
import re


class VBox:
    def __init__(self):
        self.used_ports = []

    def run_cmd(self, cmd):
        process = subprocess.Popen(
            cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )
        out, err = process.communicate()
        return out.decode("utf-8").split("\n")

    def list_vms(self, running=False):
        cmd = ["VBoxManage", "list", "vms", "-l"]
        if running:
            cmd[2] = "runningvms"

        result = self.run_cmd(cmd)

        response = []
        vm = {}
        cnt = -1

        for result_text in result:
            if len(result_text) > 0:
                txt = re.sub('[ ]{2,}', "", result_text)
                if "Memory size" in txt:
                    mem = int(re.match('\d+',txt[11:]).group()) / 1024
                    txt = f'{txt[:11]}:{mem}'
                txt = txt.split(":")
                if len(txt) > 1:
                    value = txt[1]
                    if txt[0] == 'Name':
                        response.append(vm)
                        vm = {}
                        cnt = cnt + 1
                    elif txt[0] == 'State':
                        if 'running' in value:
                            value = 'ON'
                        else:
                            value = 'OFF'
                    response[cnt][txt[0]] = value
        return response

    def create(self, base_image, name, memory, cpu_n):
        cmd = [
            "VBoxManage",
            "import",
            f'src/images/{base_image}.ova',
            "--vsys",
            "0",
            "--vmname",
            name,
            "--basefolder",
            "`pwd`/vms",
            "--memory",
            str(memory),
            "--cpus",
            str(cpu_n)
        ]
        self.run_cmd(cmd)

    def start(self, name):
        cmd = ["VBoxManage", "startvm", name, "--type", "headless"]
        self.run_cmd(cmd)
    
    def kill(self, name):
        cmd = ["VBoxManage", "controlvm", name, "poweroff"]
        self.run_cmd(cmd)

    def save(self, name):
        cmd = ["VBoxManage", "controlvm", name, "savestate"]
        self.run_cmd(cmd)

    def remove(self, name):
        cmd = ["VBoxManage", "unregistervm", name, "--delete"]
        self.run_cmd(cmd)
    
    def edit(self, name, memory, cpu_n):
        vms = self.list_vms(running=True)
        vm_is_running = False
        for vm in vms:
            if name == vm["Name"]:
                if "running" in vm["State"]:
                    vm_is_running = True
        if vm_is_running:
            self.save(name)
        cmd = ["VBoxManage", "modifyvm", name]
        if memory:
            cmd.append('--memory')
            cmd.append(memory)
        if cpu_n:
            cmd.append('--cpus')
            cmd.append(cpu_n)
        self.run_cmd(cmd)
        if vm_is_running:
            self.start(name)
        
