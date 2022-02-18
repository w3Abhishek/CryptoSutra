from flask import Flask, jsonify, request
import getCrypto
import createUser
import tradeCrypto
import getUser
app = Flask(__name__)

@app.route('/')
def main_page():
    return "Welcome to CryptoSutra API page. Strangers are not welcomed here. Please use our official web app."

@app.route('/crypto/')
def hello_world():
    try:
        return jsonify(getCrypto.crypto())
    except:
        response = {'status' : 404}
        return jsonify(response)

@app.route('/createUser')
def create():
    username = request.args.get('username')
    name = request.args.get('name')
    email = request.args.get('email')
    password = request.args.get('password')
    country = request.args.get('country')
    return jsonify(createUser.user(username, name, email, password, country))

@app.route('/buy')
def buyCoin():
    username = request.args.get('username')
    currency = request.args.get('currency')
    volume = request.args.get('volume')
    rate = request.args.get('rate')
    token = request.args.get('token')
    return jsonify(tradeCrypto.buy(username, token, currency, volume, rate))

@app.route('/user')
def users():
    username = request.args.get('username')
    return jsonify(getUser.user(username))

if __name__ == '__main__':
    app.run(port=5500)