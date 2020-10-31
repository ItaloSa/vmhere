# from Vm import Vm

# new_vm = Vm()
# new_vm.is_online()

from VBox import VBox

vbx = VBox()
# res = vbx.list_vms(running=True)
# print(res)
# vbx.create('linux_base', 'linux_clone', 1024, 1)
vbx.kill('linux_base')
