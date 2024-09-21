const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr);

// const myHeros = ["Ironman","Batman","Spiderman"]
// const myArr2 = new Array(1, 2, 3, 4)

//Note:
//array is an object which stores collection of multiple items in a single variable
//JS arrays are resizeable
//Are not arbitrary string
//When copy opeartions are create it can made shallow copies(an object is a copy whose properties share the same refrences)(deep copy of an object is a copy whose properties do not share the same refrence)


//Array methods
// myArr.push(8) //push to add values
// myArr.pop() //it removes last value defaultly
// myArr.unshift(7) //it adds value at first of array

// console.log(myArr.includes(9)) //it gives answers
// console.log(myArr.indexOf(2))

// console.log(myArr.join());

//slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B ",myArr);

const myn2 = myArr.splice(1,3) //splice cuts ut the values which is given by us in range like(1,4) or (1,7) and manipulate the original array
console.log("C ", myArr);

console.log(myn2);

