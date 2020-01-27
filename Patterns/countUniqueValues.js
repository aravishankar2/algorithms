// Count Unique Values

/*
Implement a function called countUniqueValues,
which accepts a sorted array, and counts the 
unique values in the array. There can be negative 
numbers in the array, but it will always be sorted.

countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4]) // 4

*/ 

function countUniqueValues(arr) {
    if (arr.length === 0) { return 0 }
    // we create a counter, the second will be created within the loop
    let p1 = 0
    for (var p2 = 1; p2 < arr.length; p2++) {
        // compare the two values, if they arent the same..
        if (arr[p1] !== arr[p2]) {
            // move our first pointer up
            p1++
            // change the value for the first pointer to that of the second
            arr[p1] = arr[p2]
        } 
        // if they are the same, p2 increments automatically because of the loop
    }
    return p1 + 1
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4]))