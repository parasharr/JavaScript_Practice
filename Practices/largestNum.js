function findLargestNumber(arr){
    return Math.max(...arr); 
    // Spread Operator(...) expends the array into individual elements.
    // Math.max function returns the largest of the given numbers.
}
const numbers = [1, 5, 7,10, 92,0,10];
console.log(findLargestNumber(numbers));
