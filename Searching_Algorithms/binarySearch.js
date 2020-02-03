// Binary Search

// Write a function that..
/*
    1) accepts a sorted array and a value
    2) create a left pointer at the start of the array,
       and a right pointer at the end of the array
    3) While the left pointer comes before the right pointer
        - create a pointer in the middle
        - if you find the val, return the index
        - if the val is too small, move the left pointer up
        - if it doesnt exist, return -1
*/

function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1

    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (arr[mid] === val) {
            return mid
        } else if (arr[mid] < val) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return -1
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)

