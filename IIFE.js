// immediately invoked function expressions (IIFE)

(function chai(){ //Named IIFE
    console.log("DB ONE CONNECTED");
})(); //From the global scope's pollutions some problems will occured, to avoid these problems we use IIFE 

((name)=>{ //Unnamed IIFE
    console.log(`DB TWO CONNECTED ${name}`);
})("Pranjeet");


