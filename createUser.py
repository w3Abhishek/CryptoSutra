import json

def user(username, name, email, password, country):
	json_db = open("users.json", "r")
	users = json.load(json_db)
	passwd = password
	users[username] = {'name':name, 'email':email, 'password':passwd, 'country':country}
	jsonUsers = json.dumps(users, indent = 4)
	with open("users.json", "w") as jsonDB:
		jsonDB.write(jsonUsers)
	return {"status":200}