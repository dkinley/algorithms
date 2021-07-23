// Replicate JavaScript's concat(). Create a standalone function that accepts 
// two arrays. Return a new array containing the first array's elements, followed by 
// the second array's elements. Do not alter the original arrays. 
// Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

arr1 = [0, 1];
arr2 = [2, 3];
arr3 = [];

function concat(arr1, arr2, arr3)
{
    for (var i = 0; i <= arr1.length-1; i++) {
        arr3[i] = arr1[i];
        arr[(arr1.length-1)+1] = arr2[i] 
        }
        return arr3;    
};

console.log(concat(arr1, arr2, arr3));