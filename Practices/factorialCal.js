function factorial(n){
    if(n < 0) return -1; // Factroial of a negtive number doesn't exist
    if(n === 0) return 1; // Base case: factorial of 0 is 1
    return n * factorial(n - 1);
}
console.log(factorial(5));
