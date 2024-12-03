function countVowel(str){
    let count = 0;
    const vowels = "aeiouAEIOU";
    for(let char of str){
        if(vowels.includes(char)){
            count ++;
        }
    }
    return count;
}
// char of str
// Characters "aeiouAEIOU" from str function
// If includes characters in str then count increase
// And returns

const sentence = "Hello, WORLD";
console.log(countVowel(sentence));