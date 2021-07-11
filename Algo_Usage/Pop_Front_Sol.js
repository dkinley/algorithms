var arr = [ 66, 77, 88, 99];

function PopFirst(arr) 
{
    for (var i = 0; i < arr.length-1; i++ ) {
            //looping fwd where each iteration looking at next i and adding ++ to it
            var temp = arr[i];
            // set current i = i + 1
            arr[i] = arr[i + 1];
            // i + 1 = temp
            arr[i + 1] = temp;    
    }
    console.log(arr);
    return arr.pop();
};
console.log(PopFirst(arr));
console.log(arr);

//expected output from PopFirst