// Object literals
const user = {
    username: "Pranjeet",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log("Got User Details from database");
        // console.log(`username: ${this.username}`);
        // console.log(this); 
    }

}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// constructor function

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, password){
    this.username = username;
    this.loginCount = loginCount;
    this.password = password;

    this.greeting = function(){
        console.log(`wellcome ${this.username}`);
    }

    return this
}
const userOne = new User("pranjeet", 11, "123")
const userTwo = new User("Pranjeet", 9, '12342')
console.log(userOne);
console.log(userTwo);

//When we use new keyword first of all it creates an empty object which is called instance.
// 1. new object will create
// 2. a constructor function will called because of new keyword
// 3. all argument will injected into this keyword
// 4. then all are added to function 
