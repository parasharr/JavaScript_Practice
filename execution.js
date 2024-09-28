//JS Execution Context
//1. Global Execution Context.[every execution context have their own way]
//2. Functional execution context.
//3. Eval execution context. []

//JS code runs in two phases:
//Memory creation Phase [it allocate a memory for the variables]
//execution phase [it execute the code]

let val1 = 10
let val2 = 5

function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

//execution steps
//1. global execution -> this
//2. Memory Phase [val1 -> undefined]
//                [val2 -> undefined]
//                [addNum -> defination]
//                [result1 -> undefined]
//                [result2 -> undefined]
//3. Execution phase 
// val1 <- 10
// val2 <- 5
// addNum -> [new variable environment]
//                      +
//              [execution thread]
//memory phase [val1 -> undefined]  //after execution it will be delete
//             [val2 -> undefined]
//             [total -> undefined]
//execution context [num1 -> 10]
//                  [num2 -> 5]
//                  [total -> 15]

//call stack

function one(){
    console.log("one");
    two()
}

function two(){
    console.log("two");
    three()
}

function three(){
    console.log("three");
}

one()
two()
three()


