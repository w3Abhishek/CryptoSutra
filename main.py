from flask import Flask, jsonify
import getCrypto

app = Flask(__name__)


@app.route('/crypto')
def hello_world():
    try:
        return jsonify(getCrypto.crypto())
    except:
        return "API Down"


if __name__ == '__main__':
    app.run(port=5500)
