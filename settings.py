import json

def reset(username):
    json_db = open("users.json", "r")
    users = json.load(json_db)
    if username in users:
        return {"status":409}
    else:
        users[username]['transactions'].clear()
        users[username]['investments'].clear()
        jsonUsers = json.dumps(users, indent = 4)
        with open("users.json", "w") as jsonDB:
            jsonDB.write(jsonUsers)
        return {"status":200}
def delete(username):
    json_db = open("users.json", "r")
    users = json.load(json_db)
    if username in users:
        del users[username]
        jsonUsers = json.dumps(users, indent = 4)
        with open("users.json", "w") as jsonDB:
            jsonDB.write(jsonUsers)
        return {"status":200}
    else:
        return {"status":404}
def update(username, name, email, password, country, avatar):
    json_db = open("users.json", "r")
    users = json.load(json_db)
    passwd = password
    if username in users:
        if name:
            users[username]['name'] = name
        if email:
            users[username]['email'] = email
        if passwd:
            users[username]['password'] = passwd
        if country:
            users[username]['country'] = country
        if avatar:
            users[username]['avatar'] = avatar
        jsonUsers = json.dumps(users, indent = 4)
        with open("users.json", "w") as jsonDB:
            jsonDB.write(jsonUsers)
        return {"status":200}
    else:
        return {"status":404}