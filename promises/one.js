// const promise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("The task is complete");
//         resolve();
//     },1000)
// })
// promise1.then(function(){
//     console.log("Promise confumed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Hello");
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("Done");
// })

// const promise3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "Pranjeet", email: "prgoswami@gmail.com"})    
//     },1000)
// })
// promise3.then(function(data){
//     console.log(data);
    
// })

// const promise4 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({user: "Pranjeet", email: "ex@gmail.com"})
//         }else{
//             reject(`ERR: something went wrong`)
//         }
//     }, 1000);
// })

// promise4.then(function(user){
//     console.log(user);
//     return user.username;
// })
// .then(function(username){
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
    
// })

// const promise5 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({user: "Pranjeet", email: "ex@gmail.com"})
//         }else{
//             reject(`ERR: something went wrong`)
//         }
//     }, 1000);
// })

// promise5.then(function(user){
//     console.log(user);
//     return user.username;
// })
// .then(function(username){
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// }).finally(function(){
//     console.log(`the promise is either resolve or rejected`);
// })

// const promise5 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({username: "Pranjeet", password:"123"})
//         }else{
//             reject(`ERR: Something went wrong`)
//         }
//     }, 1000);
// });

// async function consumePromise5(){
//    try {
//     const response = await promise5;
//     console.log(response);
//    } catch (error) {
//     console.log(`error happend`);
    
//    }
// }
// consumePromise5();

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(`ERR: something went wrong`);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log('Done');
})
.finally(function(){
    console.log(`run or not`); 
})

/*
a fetch() promise only rejects when a network error is encountered 
(which is usually when there's a permission issue or similar). 
a fetch() promise does not reject HTTP errors (404, etc.) 
instead, a then() handler must check the response.ok and/or response.status properties.
*/

