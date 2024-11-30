function removeDuplicate(arr){
    return arr.filter((item, index)=>{
        return arr.indexOf(item) === index;
    });
}
const numbers = [1,2,3,4,4,5,6,8,8,7]
console.log(removeDuplicate(numbers));