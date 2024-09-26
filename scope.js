if(true){//block scope
    let a = 10
    // const b = 20
}

let a = 50 //global scope

// console.log(a);
// console.log(b); error
// console.log(c); error

//nested scope

function one(){
    const user = "Pranjeet"

    function two(){
        const website = "Youtube"
        console.log(user);
    }
    // console.log(website); //will give error
    two()
}
// one()

if(true){
    const username = "Pranjeet"
    if(username === "Pranjeet"){
        const website = " Youtube"
        // console.log(username + website);
    }
}


//interesting
addOne(5)
function addOne(num){
    return num + 1
}


addTwo(5) //hoisting method
const addTwo = function(num){
    return num + 2
}


