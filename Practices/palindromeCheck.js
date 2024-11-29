function isPalindrome(str){
    str = str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase(); // Rmove non-alphanumeric characters and convert to lowercase
    const reversedStr = str.split("").reverse().join(""); // Reverse the clean string
    
    if(str === reversedStr){
        console.log("It is a palindrome");
    }else{
        console.log("It is not a palindrome");
    } // Compare the cleaned string with the  reversed string
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("hello"));
