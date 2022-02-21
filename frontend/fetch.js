const BASE = 'https://api.github.com/';

const recieveJson = async (URL) => {
    const response = await fetch(URL)
    return await response.json()
}


// Create User
recieveJson(BASE + 'createUser')
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
