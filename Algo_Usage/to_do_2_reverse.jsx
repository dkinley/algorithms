//Given a numerical array, reverse the order of values, in-place. The reversed 
//array should have the same length, with existing elements moved to other indices 
//so that order of elements is reversed. Working 'in-place' means that you cannot 
//use a second array – move values within the array that you are given. As always, 
//do not use built-in array functions such as splice().copy

arr = [1, 2, 3, 4, 5, 6];

function Reverse(arr)
{
    for (var i = 0; i <= arr.length-1; i++ ) {
            // set target location to temp
            var temp = arr[arr.length-i];
            // set  i = target location of arr.length-i
            arr[i] = arr.length-i;
            arr[arr.length-i] = i;
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