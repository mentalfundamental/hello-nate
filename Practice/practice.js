let usernameInput = 'oriusprime';
let passwordInput = 'abc123';
let online = true; 

function User(username, password, online) {
    this.username = username;
    this.password = password;
    this.online = online;
}

let user1 = new User(usernameInput, passwordInput, online);
let user2 = new User('sheena123', '123123abc', false);

let propertyList = [];
for (let prop in user2) {
    if (user2.hasOwnProperty(prop)) propertyList.push(prop);
};

console.log(propertyList);