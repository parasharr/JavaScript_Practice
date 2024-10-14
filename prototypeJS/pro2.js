// let myName = "Pranjeet"

// console.log(myName.trueLength);

let myHeros = ["thor","batman"]
let heroPower = {
    thor : "Hammer",
    batman : "Stelth",

    getBatPower: function(){
        console.log(`Batman's power is ${this.Batman}`);
    }
}

Object.prototype.durability = function(){
    console.log(`Durability is present in all Heros`);
}

Array.prototype.sixthSense = function(){
    console.log(`6th sense activated`);
}

// heroPower.durability()
// myHeros.durability()
// myHeros.sixthSense()
// heroPower.sixthSense()

// inheritance

const user = {
    name: "Pranjeet",
    email: "prgoswami@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeacheringSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeacheringSupport
}

Teacher.__proto__ = user

// modern syntex
Object.setPrototypeOf(TeacheringSupport, Teacher)

let username = "Pranjeet       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true lenght is ${this.trim().length}`);
}

username.trueLength();
"Pran".trueLength();
