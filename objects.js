// when we declare object like a literals it's not singleton . But if from the constructor it will be singleton


//object literals

// const mySym = Symbol("key1")

// const JsUser = {
//     name: "Pranjeet",
//     age : 19,
//     [mySym]: "myKey1", //interview imp
//     location: "Guwahati",
//     email: "pran@gmail.com",
//     isLoggedIn : false,
//     lastLoginDays: ["Monday", "Sunday"]
// }

// console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

// JsUser.email = "pranjeet@gmail.com"

// JsUser.greeting1 = function(){
//     console.log("Hello good morning");   
// }
// JsUser.greeting2 = function(){
//     console.log(`Hello good morning, My name is ${this.name}`);   
// }

// console.log(JsUser.greeting1());
// console.log(JsUser.greeting2());


// //singleton

// // const user = new Object() //singleton
// const user = {} // non singleton

// user.id = "123qbc"
// user.name = "Pranjeet"
// user.isLoggedIn = true


// const regularUser = {
//     email: "some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname: "Pranjeet",
//             lastname: "Goswami"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", d: "d"}

// // const obj3 = Object.assign({},obj1, obj2);
// const obj3 = {...obj1, ...obj2}

// console.log(obj3);

// const userList = [
//     {
//         id: 1,
//         email: "example@gmail.com"
//     },
//     {
//         id: 2,
//         email: "example@gmail.com"
//     },
//     {
//         id: 3,
//         email: "example@gmail.com"
//     },
//     {
//         id: 4,
//         email: "example@gmail.com"
//     },
//     {
//         id: 5,
//         email: "example@gmail.com"
//     }
// ]
// console.log(userList)

// console.log(Object.keys(JsUser))
// console.log(Object.values(JsUser))
// console.log(Object.entries(JsUser))

//De-structuring
const course = {
    courseName : "Javascript",
    price: "999",
    courseInstructor: "Pranjeet"
}

const {courseInstructor: instructor} = course
console.log(instructor);


