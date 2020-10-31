
from flask import Flask, jsonify, request, send_file
import os

APP_PORT = os.getenv('PORT') or 5000

server = Flask(__name__)
server.config['DEBUG'] = True


@server.route('/', methods=['GET'])
def hello():
    return jsonify({'message': 'hello from api'})

@server.route('/setup', methods=['POST'])
def setup_vm():
    data = request.json
    return jsonify({'message': 'ok', **data})


# @server.route('/', methods=['POST'])
# def process():
#     return jsonify({'status': 'OK'})


# @server.route('/<file_name>', methods=['GET'])
# def get_result(file_name):
#     return jsonify({'status': 'OK'})


if __name__ == '__main__':
    server.run(host='0.0.0.0', port=APP_PORT)
