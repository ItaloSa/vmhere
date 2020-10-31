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
                txt = txt.split(":")
                if len(txt) > 1:
                    if txt[0] == 'Name':
                        response.append(vm)
                        vm = {}
                        cnt = cnt + 1
                    response[cnt][txt[0]] = txt[1]
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
