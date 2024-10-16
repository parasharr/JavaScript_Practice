class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}pran`
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const pranjeet = new User("pran@gmail.com", "123abcwesddxzaedsx")
console.log(pranjeet.password);
