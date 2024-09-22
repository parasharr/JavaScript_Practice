// when we declare object like a literals it's not singleton . But if from the constructor it will be singleton


//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Pranjeet",
    age : 19,
    [mySym]: "myKey1", //interview imp
    location: "Guwahati",
    email: "pran@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Sunday"]
}

console.log(JsUser);
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email = "pranjeet@gmail.com"

JsUser.greeting1 = function(){
    console.log("Hello good morning");   
}
JsUser.greeting2 = function(){
    console.log(`Hello good morning, My name is ${this.name}`);   
}

console.log(JsUser.greeting1());
console.log(JsUser.greeting2());
