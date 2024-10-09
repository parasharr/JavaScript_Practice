// events are run sequentially in javascript, But some browser events are not work in a sequencial manner

// const img = document.querySelector('#images')
const owl = document.querySelector('#owl')

// img.addEventListener('click', function(e){
//     // console.log("clicked inside the ul");
    
// }) // flase parameter is deafult false so we don't need to write false  (event bubbling and event capturing)

owl.addEventListener('click', function(e){
    // console.log("owl clicked");
})

//true and false will depend on our use cases

//types
//timeStamps
//default Prevented
//target
//toElement
//sourceElement
//currentTarget
//Client position
//screen position

const img = document.querySelector('#images')

img.addEventListener('click', function(e){
    console.log(e.target.parentNode);
    if (e.target.tagName ==='IMG') {
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }
    
})