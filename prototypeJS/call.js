function setUserName(username){
    this.username = username
} 
function createUser(username, email, password){
    setUserName.call(this, username)

    this.email = email
    this.password = password
}

const pran = new createUser("pran","pran@gamil.com","123")
console.log(pran);
