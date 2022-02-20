var register_section =`<form action="#" class="registration" onsubmit="register()">
                    <h2 class="regis">Registration Form</h2>
                    <input type="text" placeholder="Name" id="name">
                    <input type="email" placeholder="email" id="email">
                    <input type="text" placeholder="Username" id="username">
                    <input type="password" placeholder="Password" id="pw">
                    <input type="submit" value="REGISTER">
                    <button onclick="showLogin()" class="alt_button">LOGIN</button>
                    </form>`
var login_section = `<form action="#" class="registration" onsubmit="login()">
                    <h2 class="regis">Login Form</h2>
                    <input type="text" placeholder="Username" id="username">
                    <input type="password" placeholder="Password" id="pw">
                    <input type="submit" value="LOGIN">
                    <button class="alt_button" onclick="showRegister()">REGISTER</button>
                    </form>`

function showLogin(){
    document.getElementsById().innerHTML = login_section;
}
function showRegister(){
    document.getElementById().innerHTML = register_section;
}

function showSettings(){
    var userData = {
        name : "Abhishek Verma",
        username : "abhishek",
        email : "abhishek@droidmaze.com"
    };
    var name = userData['name'];
    var username = userData['username']
    var email = userData['email']
    var settings_section = `<form action="#" class="update">
                            <input type="text" id="upd-name" value="${name}" placeholder="Name">
                            <input type="email" id="upd-email" value="${email}" placeholder="email">
                            <input type="text" id="upd-username" value="${username}" placeholder="Username">
                            <input type="password" id="old-pw" placeholder="Old Password">
                            <input type="text" id="new-pw" placeholder="New Password">
                            <input type="text" id="cfm-pw" placeholder="Confirm Password">
                            <br>
                            <input type="submit" value="UPDATE">
                        </form>
                        <div class="del-reset">
                            <button class="reset">RESET</button>
                            <button class="del">DELETE</button>
                        </div>`
    document.getElementById("update-menu").innerHTML = settings_section;
}