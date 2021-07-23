// Alan is good at breaking secret codes. One method is to eliminate values 
// that lie within a specific known range. Given arr and values min and max, 
// retain only the array values between min and max. Work in-place: return the array 
// you are given, with values in original order. No built-in array functions.

arr = [0, 1, 2, 3, 4, 5, 6, 7];
min = 2
max = min+3

function filter(arr, min, max)
{
    for (var i = 0; i <= arr.length-1; i++ ) {
            // set if statement so that if the value falls below then set to min, if above then set to max
            if (arr[i] < min) {
                arr[i] = min
            }
        }

    for (var i = 0; i <= arr.length-1; i++ ) {
        // set if statement so that if the value falls below then set to min, if above then set to max
        if (arr[i] > max) {
            arr[i] = max
        }
    }

    console.log(arr);

};

filter(arr, min, max);