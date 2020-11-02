from VBox import VBox
from Vm import Vm

def get_vms():
    try:
        vbox = VBox()
        vms = vbox.list_vms()
        data = []

        for vm in vms:
            vm_obj = Vm()
            vm_obj.set_cpus(vm["Number of CPUs"])
            vm_obj.set_name(vm["Name"])
            vm_obj.set_memory(float(vm["Memory size"]))
            vm_obj.set_os(vm["Guest OS"])
            vm_obj.set_state(vm["State"])
            data.append(vm_obj.__dict__)

        return data
    except Exception as e:
        print('error - get_vms')
        print(e)
        return 0


def create_vm(os, name, memory, cpu_n):
    try:
        vms = get_vms()
        exists = False
        for vm in vms:
            if vm["name"] == name:
                exists = True
        if exists:
            return -1
        
        base_image = 'linux_base'
        if os == 'Windows 2008 (64-bit)':
            base_image = 'windows_base'
        vm = Vm()
        vbox = VBox()
        vbox.create(base_image, name, memory*1024, cpu_n)
        return 1
    except Exception as e:
        print('error - create_vm')
        print(e)
        return 0

def start_vm(name):
    try:
        vbox = VBox()
        vbox.start(name)
        return 1
    except Exception as e:
        print('error - start_vm')
        print(e)
        return 0

def save_vm(name):
    try:
        vbox = VBox()
        vbox.save(name)
        return 1
    except Exception as e:
        print('error - save_vm')
        print(e)
        return 0

def kill_vm(name):
    try:
        vbox = VBox()
        vbox.kill(name)
        return 1
    except Exception as e:
        print('error - kill_vm')
        print(e)
        return 0

def remove_vm(name):
    try:
        vbox = VBox()
        vbox.kill(name)
        vbox.remove(name)
        return 1
    except Exception as e:
        print('error - kill_vm')
        print(e)
        return 0
