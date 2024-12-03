function sumofArray(arr){
    let sum = 0;
    for (let i = 0; i<arr.length; i ++){
        sum = sum + arr[i];
    }
    return sum;
}
const numbers = [1,2,3,4,5,2,4,3,4,5]
console.log(sumofArray(numbers));