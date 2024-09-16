const accountId = 1324465; //const can't be changed
let accountEmail = "pran@gmail.com"; 
var accountPassword = "1234552";
accountCity = "Guwahati";
let accountState;

//try changing values

accountEmail = "prangos@gmail.com";
accountPassword = "21212121";
accountCity = "Mumbai";

/*
    Prefer Not to use var,
    because of issue in block scope and functional scope
*/

console.table([accountEmail,accountPassword,accountCity,accountId,accountState])