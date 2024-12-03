function capitalization(str){
    return str 
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLoweCase())
    .join(' ');
}

const sentence = "hello, world! this is a test.";
console.log(capitalization(sentence))