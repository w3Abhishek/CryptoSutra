import json

def buy(username, token, currency, volume, rate):
	json_db = open("users.json", "r")
	users = json.load(json_db)
	if (token == users[username]['token']):
		users[username]['crypto'] = []
		users[username]['crypto'].append({'currency':currency, 'volume':volume, 'rate':rate})
		jsonUsers = json.dumps(users, indent = 4)
		with open("users.json", "w") as jsonDB:
			jsonDB.write(jsonUsers)
		return {'status':200}
	else:
		return {'status':404}