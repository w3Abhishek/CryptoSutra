from flask import Flask, jsonify, request
import crypto, users, trade, news, settings
app = Flask(__name__)

@app.route('/')
def main_page():
    return "Welcome to CryptoSutra API page. Strangers are not welcomed here. Please use our official web app."

# User API
@app.route('/user/create')
def create_user():
    username = request.args.get('username')
    name = request.args.get('name')
    email = request.args.get('email')
    password = request.args.get('password')
    country = request.args.get('country')
    avatar = "https://theabhishek.dev/files/avatar.png"
    return jsonify(users.create(username, name, email, password, country, avatar))

@app.route('/user/login')
def login_user():
    username = request.args.get('username')
    password = request.args.get('password')
    return jsonify(users.login(username, password))

@app.route('/user/checkusername')
def check_username():
    username = request.args.get('username')
    return jsonify(users.check(username))

@app.route('/user')
def get_user():
    username = request.args.get('username')
    return jsonify(users.user(username))

@app.route('/user/stats')
def user_stats():
    username = request.args.get('username')
    return jsonify(users.stats(username))

# Trading API
@app.route('/crypto')
def crypto():
    try:
        currency = request.args.get('currency')
        if currency == None:
            return jsonify(crypto.getAll())
        else:
            return jsonify(crypto.get(currency))
    except:
        response = {'status' : 404}
        return jsonify(response)

@app.route('/trade/buy')
def buy_crypto():
    username = request.args.get('username')
    currency = request.args.get('currency')
    volume = int(request.args.get('volume'))
    price = int(request.args.get('price'))
    return jsonify(trade.buy(username, currency, volume, price))

@app.route('/trade/sell')
def sell_crypto():
    username = request.args.get('username')
    currency = request.args.get('currency')
    volume = int(request.args.get('volume'))
    price = int(request.args.get('price'))
    return jsonify(trade.sell(username, currency, volume, price))

# News API
@app.route('/news')
def getnews():
    try:
        currency = request.args.get('currency')
        if currency == None:
            return jsonify(news.all())
        else:
            return jsonify(news.get(currency))
    except:
        response = {'status' : 404}
        return jsonify(response)

# Settings API
@app.route('/settings/reset', methods=['GET', 'POST'])
def reset_user():
    if request.method == 'POST':
        username = request.args.get('username')
        return jsonify(settings.reset(username))
    else:
        return jsonify({"status":405, "message":"GET Method not allowed"})

@app.route('/settings/delete', methods=['GET', 'POST'])
def delete_user():
    if request.method == 'POST':
        username = request.args.get('username')
        return jsonify(settings.delete(username))
    else:
        return jsonify({"status":405, "message":"GET Method not allowed"})

@app.route('/settings/update', methods=['GET', 'POST'])
def update_user():
    if request.method == 'POST':
        username = request.args.get('username')
        name = request.args.get('name')
        email = request.args.get('email')
        password = request.args.get('password')
        country = request.args.get('country')
        avatar = request.args.get('avatar')
        return jsonify(settings.update(username, name, email, password, country, avatar))
    else:
        return jsonify({"status":405, "message":"GET Method not allowed"})

if __name__ == '__main__':
    app.run(port=5500)