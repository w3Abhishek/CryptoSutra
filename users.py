import json

def user(username):

	json_db = open("users.json", "r")
	users = json.load(json_db)
	user = users[username]
	json_db.close()
	return user

def create(username, name, email, password, country, avatar):
	json_db = open("users.json", "r")
	users = json.load(json_db)
	passwd = password
	if username in users:
		return {"status":409}
	else:
		users[username] = {'name':name, 'email':email,
		'password':passwd, 'country':country,
		'avatar':avatar, 'transactions':[],
		'stats':{'balance':150000, 'profit':0,
				'loss':0, 'invested':0}, 
				'investments':[], 'cryptos':{}}
		jsonUsers = json.dumps(users, indent = 4)
		with open("users.json", "w") as jsonDB:
			jsonDB.write(jsonUsers)
		return {"status":200}

def transactions(username):
	try:
		json_db = open("users.json", "r")
		users = json.load(json_db)
		return users[username][transactions]
	except:
		return {'status_code':404}

def login(username, password):
	json_db = open("users.json", "r")
	users = json.load(json_db)
	if username in users:
		if users[username]['password'] == password:
			return {"status":200}
		else:
			return {"status":401}
	else:
		return {"status":404}

def check(username):
	json_db = open("users.json", "r")
	users = json.load(json_db)
	if username in users:
		return {"status":200}
	else:
		return {"status":404}

def stats(username):
	json_db = open("users.json", "r")
	users = json.load(json_db)
	if username in users:
		return {"status":200, "stats":users[username]['stats']}
	else:
		return {"status":404}

def check(username):
	json_db = open("users.json", "r")
	users = json.load(json_db)
	if username in users:
		return {"status":200}
	else:
		return {"status":404}