//Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), 
//change the array to [3,1,2]. Don't use built-in functions.
//X Second: allow negative shiftBy (shift L, not R).
//X Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
//X Fourth: minimize the touches of each element.copy

arr = [0, 1, 2, 3, 4];
shiftBy = 2

function shift(arr, shiftBy) {
    for (var x = 1; x <= shiftBy; x++ );
    {
        return rotateArr(arr);
    }
};

function rotateArr(arr)
    {
            var temp = arr[arr.length-1]; //4
            for (var i = arr.length-1; i >= 1; i-- )
                {
                arr[i] = arr[i-1]; //shifting
                }
                arr[0] = temp
        
        return(arr)
    };

//Nested for loop
//take itme at end into temp
//for loop and set arr[i+1] = arr[i]
// [1,2,3] -> [1,1,2]
// arr[0] = temp

//shift(arr, shiftBy);
console.log(arr);
console.log(shift(arr, shiftBy));

