// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function(button){
//     button.addEventListener('click', function(e){
//         console.log(e.target);
//        if(e.target.id === 'colorChanger1'){
//             body.style.backgroundColor = "grey";
//        } 
//     })
// })

const changer1 = document.getElementById('colorChange1')
const changer2 = document.getElementById('colorChange2')
const changer3 = document.getElementById('colorChange3')
const changer4 = document.getElementById('colorChange4')
const changer5 = document.getElementById('colorChange5')
const changer6 = document.getElementById('colorChange6')
const changer7 = document.getElementById('colorChange7')

changer1.addEventListener('click', function(){
    document.body.style.backgroundColor = "red"
})
changer2.addEventListener('click', function(){
    document.body.style.backgroundColor = "lightgreen"
})
changer3.addEventListener('click', function(){
    document.body.style.backgroundColor = "lightblue"
})
changer4.addEventListener('click', function(){
    document.body.style.backgroundColor = "yellow"
})
changer5.addEventListener('click', function(){
    document.body.style.backgroundColor = "orange"
})
changer6.addEventListener('click', function(){
    document.body.style.backgroundColor = "grey"
})
changer7.addEventListener('click', function(){
    document.body.style.backgroundColor = "black"
})


