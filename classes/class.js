class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}
const pran = new User("pranjeet","pran@gmail.com","123")
console.log(pran.encryptPassword());
console.log(pran.changeUserName());

//behind the scene

function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
user.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}
const test = new user("test","test@gmail.com","123")

console.log(test.encryptPassword());
console.log(test.changeUserName());