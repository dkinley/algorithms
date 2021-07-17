// Alan is good at breaking secret codes. One method is to eliminate values 
// that lie within a specific known range. Given arr and values min and max, 
// retain only the array values between min and max. Work in-place: return the array 
// you are given, with values in original order. No built-in array functions.

arr = [0, 1, 2, 3, 4];
min = 0
max = min+3

function filter(arr)
{
    for (var i = 0; i <= arr.length-1; i++ ) {
            var temp = arr[i]; //10
            arr[i] = arr[arr.length-i-1]; //13 in index 1
            arr[arr.length-i-1] = temp // temp set to 10
    }
    console.log(arr);

};

console.log(arr);
filter(arr);