// Sliding Window Pattern

/*
This pattern involves creating a window which 
can either be an array or number from one 
position to another

Depending on a certain condition, the window
either increases or closes (and a new window 
is created)

Very useful for keeping track of a subset of data
in an array/string etc.

example: 

Write a function called maxSubarraySum which accepts 
an array of integers and a number called n. The function
should calculate the maximum sum of n consecutive 
elements in the array.
*/ 

// Naive solution using for loop

function maxSubArraySum(arr, num) {
    // if the window is longer than the length of our array, return null
    if (num > arr.length) {
        return null
    }
    // set our max to -Infinity in case we deal with negative numbers
    var max = -Infinity
    /* arr.length - num + 1 allows us to check 
    the exact last set of 'n' ints to sum together 
    without exceeding the length of array */
    for(let i = 0; i < arr.length - num + 1; i++) {
        temp = 0
        // Loop throught array with window of length n, add up values and store in temp
        for (let j = 0; j < num; j++) {
            temp += arr[i + j]
        }
        // The highest value will be set as max
        if(temp > max) {
            max = temp
        }
    }
    return max
}

// refactored version using two separate for loops. There are two loops but we only go over the array once.

function maxSubarraySum_refactored(arr, num) {
    let maxSum = 0
    let tempSum = 0
    if (arr.length < num) return null
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    // We are removing the first item of our window and adding the one after the window to create a sliding effect
    // We are able to loop through once, and find the maxSum using Math.max
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}



