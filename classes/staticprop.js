class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const pran = new user ("Pranjeet")
// console.log(pran.createId())

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.logMe());
