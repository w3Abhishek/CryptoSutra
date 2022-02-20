import json

def buy(username, currency, volume, price):
	json_db = open("users.json", "r")
	users = json.load(json_db)
	amount = volume * price
	if username in users:
		if amount <= users[username]['stats']['balance']:
			if currency in users[username]['cryptos']:
				users[username]['cryptos'][currency]['volume'] += volume
				users[username]['investments'].append({'currency':currency, 'volume':volume, 'price':price})
				users[username]['stats']['invested'] += amount
				users[username]['stats']['balance'] -= amount
				jsonUsers = json.dumps(users, indent = 4)
				with open("users.json", "w") as jsonDB:
					jsonDB.write(jsonUsers)
				return {"status":200}
			else:
				users[username]['cryptos'][currency] = {'volume':volume, 'price':price}
				users[username]['investments'].append({'currency':currency, 'volume':volume, 'price':price})
				users[username]['stats']['invested'] += amount
				users[username]['stats']['balance'] -= amount
				jsonUsers = json.dumps(users, indent = 4)
				with open("users.json", "w") as jsonDB:
					jsonDB.write(jsonUsers)
				return {"status":200}
	else:
		return {"status":404}

def sell(username, currency, volume, price):
	json_db = open("users.json", "r")
	users = json.load(json_db)
	amount = volume * price
	if username in users:
		if currency in users[username]['cryptos']:
			if volume <= users[username]['cryptos'][currency]['volume']:
				users[username]['cryptos'][currency]['volume'] -= volume
				users[username]['investments'].append({'currency':currency, 'volume':-volume, 'price':price})
				users[username]['stats']['invested'] -= amount
				users[username]['stats']['balance'] += amount
				jsonUsers = json.dumps(users, indent = 4)
				with open("users.json", "w") as jsonDB:
					jsonDB.write(jsonUsers)
				return {"status":200}
			else:
				return {"status":400}
		else:
			return {"status":404}
	else:
		return {"status":404}