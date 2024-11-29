function stringReverse(str){
    return str.split("") //Split method splits the string into an array of characters.
    .reverse() // Reverse will reverse the order of the elements in the array
    .join(""); // Join will joins the elements of the array back into a single string
}

console.log(stringReverse("hello"));
