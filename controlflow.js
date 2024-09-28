//if statement

//
// const temp = 40
// if(temp > 50){
//     console.log("to hot");
// }else{
//     console.log("more then 50");
// }

// < , > , <= , >= , ==, != , ==, ===

//block scope
// const score = 200;
// if(score > 100){
//     const power = "flying";
//     console.log(`The User have ${power} power`)
// }

//short hand notation

// const balance = 2000;
// if(balance > 500) console.log("have more") //implicit scope not good practice

// if(balance < 500){
//     console.log("less than 500");    
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 3000");
// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if(userLoggedIn && debitCard){
//     console.log("allow to buy");
// }

// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log("logged in");   
// }


//switch

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3

// switch (month) {
//     case 1:
//         console.log("January")
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     default:
//         console.log("Default");
//         break;
// }

//truthy falsy

const userEmail = "prgos@gmail.com"

if(userEmail){
    console.log("Got user email");
}else{
    console.log("dont have user email");
}

//falsy values : false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy values :  "0", 'false', " ", [], {}, function(){}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("empty");
}
