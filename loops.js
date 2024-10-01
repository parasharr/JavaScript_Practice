//for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("Hello");
    }
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop val: ${i}`);
    
    for (let j = 0; j < 20; j++) {
        // console.log(`inner loop val: ${j}`);
        // console.log(i + '*' + j + ' = ' + i*j);
        
    }
    
}

let myArray = ["Batman","Flash","Superman"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

//loops keywords
//break and continue

// for (let index = 1; index < 20; index++) {
//     if (index == 5) {
//         console.log("detected 5");
//         break
//     }
//     console.log(`value of i: ${index}`);
// }
for (let index = 1; index < 20; index++) {
    if (index == 5) {
        // console.log("detected 5");
        continue
    }
    // console.log(`value of i: ${index}`);
}

//While loop

let i = 0;
while(i <= 10){
    // console.log(`value of i : ${i}`);
    i +=2;
}

let oneArray = ['hello','how are you','i am fine thank you']
let arr = 0
while (arr < oneArray.length) {
    // console.log(`${oneArray[arr]}`);
    arr++;
}

//Do while
let score = 1;
do {
    // console.log(`score is: ${score}`);
    score++;
} while (score <= 10);

//for of loop

const myArr = [1,2,3,4,5]

for (const value of myArr) {
    console.log(value);
}