import subprocess


class Vm:

    def __init__(self):
        self.name = 'name'
        self.os = 'os'
        self.memory = 1024
        self.cpus = 1
        self.state = 'OFF'

    def is_online(self):
        process = subprocess.Popen([
            "VBoxManage",
            "list",
            "vms"
        ],
        stdout=subprocess.PIPE, 
        stderr=subprocess.PIPE)
        out, err = process.communicate()
        print(out.decode("utf-8").split("\n"))

    def set_name(self, value):
        self.name = value

    def get_name(self):
        return self.name

    def set_os(self, value):
        self.os = value

    def get_os(self):
        return self.os

    def set_memory(self, value):
        value = int(value)
        if value < 1:
            value = 1
        elif value > 4:
            value = 4
        self.memory = value

    def get_memory(self):
        return self.memory 
    
    def get_memory_mb(self):
        return self.memory * 1024

    def set_cpus(self, value):
        value = int(value)
        if value < 1:
            value = 1
        elif value > 4:
            value = 4
        self.cpus = value

    def get_cpus(self):
        return self.cpus
    
    def set_state(self, value):
        self.state = value
    
    def get_state(self):
        return self.state

