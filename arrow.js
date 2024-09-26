const user = {
    username: "Pranjeet",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); //this referse current context to access anyvalue
        console.log(this); //current context 
    }
}

// user.welcomeMessage()
console.log(this); // empty object

// function one(){//this won't work in function
//     let username = "Pranjeet"
//     console.log(this.username);
// }
// one()

const chai = ()=>{
    let username = "pranjeet"
    console.log(this.username);
}

// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }

const addTwo = (num1, num2)=> (num1 + num2)
console.log(addTwo(3,4))