
from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
import os
import controller

APP_PORT = os.getenv('PORT') or 5000

server = Flask(__name__)
server.config['DEBUG'] = True
CORS(server)


@server.route('/', methods=['GET'])
def hello():
    return jsonify({'message': 'ok'}), 200


@server.route('/vms', methods=['GET'])
def get_vms():
    vms = controller.get_vms()
    if vms:
        return jsonify({'code': 'OK', 'data': vms}), 200
    else:
        return jsonify({'code': 'NOT_OK'}),  500


@server.route('/vms', methods=['POST'])
def add_vm():
    data = request.json
    print(data)
    vm = controller.create_vm(
        os=data["os"],
        memory=int(data["memory"]),
        name=data["name"],
        cpu_n=int(data["cpu_n"])
    )
    if vm == -1:
        return jsonify({'code': 'DUPLICATED'}), 400
    elif vm:
        return jsonify({'code': 'OK'}), 201
    else:
        return jsonify({'code': 'NOT_OK'}),  500


@server.route('/vms/<name>/start', methods=['POST'])
def start_vm(name):
    vm = controller.start_vm(name)
    if vm:
        return jsonify({'code': 'OK'}), 200
    else:
        return jsonify({'code': 'NOT_OK'}),  500


@server.route('/vms/<name>/save', methods=['POST'])
def save_vm(name):
    vm = controller.save_vm(name)
    if vm:
        return jsonify({'code': 'OK'}), 200
    else:
        return jsonify({'code': 'NOT_OK'}),  500


@server.route('/vms/<name>/stop', methods=['POST'])
def kill_vm(name):
    vm = controller.kill_vm(name)
    if vm:
        return jsonify({'code': 'OK'}), 200
    else:
        return jsonify({'code': 'NOT_OK'}),  500


@server.route('/vms/<name>/remove', methods=['POST'])
def remove_vm(name):
    vm = controller.remove_vm(name)
    if vm:
        return jsonify({'code': 'OK'}), 200
    else:
        return jsonify({'code': 'NOT_OK'}),  500


if __name__ == '__main__':
    server.run(host='0.0.0.0', port=APP_PORT)
