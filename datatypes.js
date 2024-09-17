// let name = "Pranjeet"
// let age = 19
// let isLoggedIn = true
// let state;

// //primitve datatypes

// //number => 2 to power 53 
// //bigInt
// //String => ""
// //boolean => true/false
// //null => is a standalone value
// //undefined
// //symbol => unique

// //objects

// console.log(typeof undefined); //undefined
// console.log(typeof null); //object

//conversion
// let score = 33;
// let score2 = "33";

// console.log(typeof score);
// console.log(typeof (score2));

// let valueInNumber = Number(score2);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN
// true => 1; false => 0

// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

//1 => true; 0 => false;
//""=>false
//"pranjeet => true"

let someNumber = 33

let StringNumber = String(someNumber)
console.log(StringNumber)
console.log(typeof StringNumber)

// summary
// Primitive
// 7 types : String, number, boolean, null, undefined, symbol, BigInt
const score = 1000;
const scoreValue = 100.4;
const isLoggedIn = false;
const temp = null; //object
let userEmail; 

const id = Symbol('43424'); //symbol
const anotherId = Symbol('43424');

console.log(id === anotherId); //false

const bigNumber = 1212643415122324423231n; //undefined

// Refrence type(Non Primitive)
// Array, objects, functions

const heros = ["ironman", "thor", "hulk"] //array

const person = {
    name: "Pranjeet",
    age : 19
} // objects

const myFunc = function(){
    console.log("hello world");
} //functions

// all non primitives return their datatypes as function object