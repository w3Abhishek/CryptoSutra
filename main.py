from flask import Flask, jsonify
import getCrypto

app = Flask(__name__)


@app.route('/crypto')
def hello_world():
    return jsonify(getCrypto.crypto())


if __name__ == '__main__':
    app.run(port=5500)