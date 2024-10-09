var con = document.querySelector("#container");
var love = document.querySelector("#love");
var heart = document.querySelector("#heart");

con.addEventListener("dblclick", function(){
    heart.style.transform = 'translate(-50%, -50%) scale(1)';
    heart.style.opacity = 0.8;

    setTimeout(function(){
        heart.style.opacity = 0;
    },400)
    setTimeout(function(){
        heart.style.transform = 'translate(-50%, -50%) scale(0)';
    },500);

    love.style.color = "red"
});

love.addEventListener("click", function(){
    love.style.color = "#fff"
})