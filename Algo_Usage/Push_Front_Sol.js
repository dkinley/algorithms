var item = 1, 
arr = [2, 3, 4, 5];

ManualUnshift(arr);
function ManualUnshift(arr) {
    for (i = arr.length-1; i >= 0; --i) {
        arr[i + 1] = arr[i];
    }
    arr[0] = item;
};
console.log(arr);

//expected output from ManualUnshift [1,2,3,4,]