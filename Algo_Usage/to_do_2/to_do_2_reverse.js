//Given a numerical array, reverse the order of values, in-place. The reversed 
//array should have the same length, with existing elements moved to other indices 
//so that order of elements is reversed. Working 'in-place' means that you cannot 
//use a second array – move values within the array that you are given. As always, 
//do not use built-in array functions such as splice().copy

arr = [9, 10, 11, 12, 13];

function Reverse(arr)
{
    for (var i = 0; i <= (arr.length-1)/2; i++ ) {
            var temp = arr[i]; // set the temp variable to = the iterated value, [i]
            arr[i] = arr[arr.length-i-1]; // set the interated value [i] to now = last value
            arr[arr.length-i-1] = temp // now set the last value to = temp value
    }
    console.log(arr);

};

console.log(arr);
Reverse(arr);

// step1 reverse for loop to move arr[i] to arr.length-1
// set each array element index value
// 

// 0 -> 5 
// 1 -> 4
// 2 -> 3  (getting from 2 to 3 is array.length - i or 5-2)
// 3 -> 2  (after 1/2 way )
// 4 -> 1
// 5 -> 0