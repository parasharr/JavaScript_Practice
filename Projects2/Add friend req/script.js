var Status = document.querySelector('h5')
var btn = document.querySelector('#add')
var check = 0;

btn.addEventListener("click", function(){
    if(check == 0){
        Status.innerHTML = "Friends";
        Status.style.color = "green";
        btn.innerHTML = "Remove Friend"
        check = 1
    }else{
        Status.innerHTML = "Not in your friend list";
        Status.style.color = "red";
        btn.innerHTML = "Add Friend"
        check = 0;   
    }
});

