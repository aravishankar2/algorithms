// Multiple Pointers

/* 
Creating 'pointers' or values that correspond to
an index or position and move towards the beginning,
end or middle based on a certain condition. 

Very efficient for solving problems 
with minimal space complexity.

Example:

Write a function called sumZero which accepts a sorted
array of integers. The function should find the first 
pair of where the sum is 0. Return an array that includes both 
values that sum to zero, or undefined if a pair does not exist.

sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3])            // undefined
sumZero([1, 2, 3])                // undefined
*/

// Naive solution O(N^2) time and O(1) space

function sumZero(arr) {
     for (let i = 0; i < arr.length; i++) {
         for (let j = i + 1; j < arr.length; j++) {
             if (arr[i] + arr[j] === 0) {
                 return [arr[i], arr[j]]
             }
         }
     }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))

// refactored version using a while loop, O(N) time and O(1) space. Much better!

function sumZero_refactored(arr) {
     // create our pointer indexes
     let left = 0;
     let right = arr.length - 1
    /*  when using pointers, alot of times we will
        use a while loop to determine when the pointers 
        cross eachother. This is the case that will break 
        the loop for us, and allows us to continually run
        the loop until a match has been found.  
    */
   while (left < right) {
    // the sum of the current values being pointed to
       let sum = arr[left] + arr[right]
       if (sum === 0) {
           return [arr[left], arr[right]]
       } else if (sum > 0) {
           right--
       } else {
           left++
       }
   }
}

console.log(sumZero_refactored([-3, -2, -1, 0, 1, 2, 3]))


/*
Write a function called isSubsequence which takes in two strings
and checks whether the characters in the first string form a 
subsequence of the characters in the second string. In other words, 
the function should check whether the characters in the first 
string appear somewhere in the secong string, without their order changing.

isSubsequence('hello', 'hello world') // true
isSubsequence('sing', 'sting') // true
isSubsequence('abc', 'hello abraca') // true
isSubsequence('abc', 'acb') //
*/

function isSubsequence(str1, str2) {
    let p1 = 0;
    let p2 = 0;
//     while your iterating through the second string..
    while (p2 < str2.length) {
//     if the first letter of the the strings are equal, move to the next letter in the first string
    if (str2[p2] === str1[p1]) { p1++ }
//     if the p1 is the same as the first words length, you found the str in the second word
    if (p1 === str1.length) { return true }
//     if the letters are not equal and you havent found the word yet, move to the next letter in str 2 
    p2++
    }
    return false
}
