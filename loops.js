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
    // console.log(value);
}

const greeting = "Hello"

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

//Map

const map = new Map()
map.set('IND', "India")
map.set('USA', "United States Of America")
map.set('Fr', "Franch")

for (const [key, value] of map) {
    // console.log(key, ':->', value);
}

// console.log(map);

//For of in object
const myGames = {
    'game1': 'NFS',
    'game2': 'Spiderman',
    'game3': 'Call of duty'
}

// for (const element of object) {
//     //for of will not work in object
// }

//for in
const myObj = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

//for each
const coding = ["js","ruby","java","python","javascript"]

coding.forEach( function(item){
    // console.log(item);
    
})

const myCoding = [
    {
        langName: "Javascript",
        fileExtension: ".js"
    },
    {
        langName: "Pythont",
        fileExtension: ".py"
    },
    {
        langName: "C++",
        fileExtension: ".cpp"
    }
]

myCoding.forEach(function(item){
    // console.log(item.langName);
})

//filter

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num)=> num > 5 )
// console.log(newNums);

// const books = [
//     {title: 'Book one', genre: 'History', publish: 1986, edition: 2001},
//     {title: 'Book two', genre: 'Mystry', publish: 1986, edition: 2003},
//     {title: 'Book three', genre: 'Fiction', publish: 1986, edition: 1999},
//     {title: 'Book four', genre: 'Non-Fiction', publish: 1986, edition: 1999},
//     {title: 'Book five', genre: 'Science', publish: 1986, edition: 1999},
//     {title: 'Book six', genre: 'History', publish: 1986, edition: 1999},
//     {title: 'Book seven', genre: 'Petriotism', publish: 1986, edition: 1999},
//     {title: 'Book eight', genre: 'History', publish: 1986, edition: 1999},
//     {title: 'Book 9', genre: 'Novel', publish: 1986, edition: 1999},
//     {title: 'Book 10', genre: 'Fiction', publish: 1986, edition: 1999},
//     {title: 'Book 11', genre: 'Scrience', publish: 1986, edition: 1999},
//     {title: 'Book 12', genre: 'Mystry', publish: 1986, edition: 1999},
//     {title: 'Book 13', genre: 'Novel', publish: 1986, edition: 1999},
//     {title: 'Book 14', genre: 'History', publish: 1986, edition: 1999},
//     {title: 'Book 15', genre: 'Novel', publish: 1986, edition: 1999},
//     {title: 'Book 16', genre: 'Diary', publish: 1986, edition: 1999},
//     {title: 'Book 17', genre: 'Biography', publish: 1986, edition: 1999},
//     {title: 'Book 18', genre: 'Sports', publish: 1986, edition: 1999},
//     {title: 'Book 19', genre: 'History', publish: 1986, edition: 1999},
//     {title: 'Book 20', genre: 'Love', publish: 1986, edition: 1999}
// ]
// let userBooks = books.filter((bk)=> bk.genre = 'History')
// const userBooks2 = books.filter((bk)=>{
//     return bk.publish >= 1995 && bk.genre === 'History';
// })

// console.log(userBooks)

// console.log(userBooks2)

//Map

const myNumbers = [1,2,3,4,5,7,8,10]

// const newNumbers = myNumbers.map((item)=> item + 10)

const newNumbers = myNumbers
                    .map((num)=> num * 10)
                    .map((num)=> num + 5)
                    .filter((num)=> num >= 40)
// console.log(newNumbers);



//reduce
const numbers = [1,2,3,4,5]

// const myTotal = numbers.reduce(function(acc, currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc + currval;
// }, 0)

const myTotal = numbers.reduce((acc, currval)=> acc+currval, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "T-shirt",
        price: 2999
    },
    {
        itemName: "Shirt",
        price: 4999
    },
    {
        itemName: "Jeans",
        price: 2599
    },
    {
        itemName: "Bag",
        price: 1599
    },
]

const PriceToPay = shoppingCart.reduce((acc , item)=> acc + item.price ,0)
console.log(PriceToPay);

