import json

def user(username):

	json_db = open("users.json", "r")
	users = json.load(json_db)
	user = users[username]
	json_db.close()
	return user