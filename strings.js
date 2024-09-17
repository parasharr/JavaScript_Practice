const name = "Pranjeet"
const repoCount = "20"

console.log(`${name} with ${repoCount} repo`); //String interpullation


const gameName = new String('darkvader');
console.log(gameName[0]); //access key values
console.log(gameName.__proto__);

//using objects
console.log(gameName.length);
console.log(gameName.toUpperCase()); //original value won't be change
console.log(gameName.charAt('5')); // to know the position of character
console.log(gameName.indexOf('v')); // reverse position checking

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4) // we can use negative values in here
console.log(anotherString)

const newString1 = "   Pranjeet   "
console.log(newString1)
console.log(newString1.trim());

const url = "https://github.com/pranjeet%20Goswami"
console.log(url.replace('%20', '-'));
console.log(url.includes('pranjeet'));

console.log(gameName.split('-'))

