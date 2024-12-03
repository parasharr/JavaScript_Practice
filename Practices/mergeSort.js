function mergeSort(arr1, arr2){
    let mergeArray = [];
    let i = 0;
    let j = 0;

    // Traverse both arrays
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            mergeArray.push(arr1[i])
            i++;
        }else{
            mergeArray.push(arr2[j])
            j++;
        }
    }

    // If there are remaining elements in arr1
    while(i < arr1.length){
        mergeArray.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2
    while(j < arr2.length){
        mergeArray.push(arr2[j]);
        j++
    }
    return mergeArray;
}

const arr1 = [1,3,5,7];
const arr2 = [2,4,6,8];
console.log(mergeSort(arr1, arr2));