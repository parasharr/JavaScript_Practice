// function sayMyName(){
//     console.log("P")
//     console.log("R")
//     console.log("A")
//     console.log("N")
//     console.log("J")
//     console.log("E")
//     console.log("E")
//     console.log("T")
// }

// sayMyName()

// function addTwoNums(num1, num2) {//parameters
//     console.log(num1 + num2);
// }
// const result = addTwoNums(3,4)//output 7 from function
// console.log("Result", result) //the result will be undefined 

function addTwoNums(num1, num2) {//parameters
    let result = num1 + num2
    return result
    // console.log("Hi") //after result the functon won't work
}

const result = addTwoNums(3,4)
// console.log("Result", result);

function loginUserMessage(username){
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Pranjeet"))




function calculateCartPrice(...num1){//... rest operator
    return num1
}

// console.log(calculateCartPrice(200,4000,5000));/

const user ={
    username: "Pranjeet",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
