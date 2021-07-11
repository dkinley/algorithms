// Given an array, index, and additional value, insert the value into array at 
//given index. Do this without using built-in array methods. You can think of 
//pushFront(arr,val) as equivalent to insertAt(arr,0,val).

// Step 1 declare array
var arr = [ 1, 2, 4, null]
// Step 2 create variable for additional value i 
var insert = 3
var insertAtIndex = 2
// Step 3 Function to do a fwd for loop over array by each element
function InsertVal(arr)
{
    for(var i = 0; i < arr.length-1; i++ ) {
        if (i == insertAtIndex) {
            arr[i+1] = arr[i]
            arr[i] = insert
        }
    }
}
console.log(InsertVal(arr));
console.log(arr);

// In the loop, when the current iteration == the value i
// perform save current i value to temp 
// then insert i value at current i
// Future need to add an if then statement to increment i of all values greater than 