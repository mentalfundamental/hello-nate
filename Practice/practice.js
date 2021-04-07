//
let log = v => {console.log(v)};
//

function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
};

User.prototype.login = function() {
    this.online = true;
    log(`${this.email} has logged in`)
}

User.prototype.logout = function() {
    this.online = false;
    log(`${this.email} has logged out`)
}

function Admin(...args) {
    User.apply(this, args);
    this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (user) {
    users = users.filter(u => {
        return u.email != user.email;
    });
};

let user1 = new User('natecorpuz@gmail.com', 'Nate');
let user2 = new User('NashCorpuz@gmail.com', 'Nash');
let admin = new Admin('nate.corpuz.1@gmail.com', 'Nate%!');

let users = [user1, user2, admin];

log(admin);
admin.deleteUser(admin);
log(users);