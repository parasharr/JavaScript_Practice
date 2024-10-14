class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`New courses was added by ${this.username}`); 
    }
}

const pran = new Teacher("Pranjeet","pran@gmail.com","123")
pran.addCourse();

const test = new User("Testcase")
test.logMe();

