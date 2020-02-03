// Bubble Sort

/*
    A sorting algorithm where the largest
    values 'bubble' up to the top
*/

/* 
    1) Start looping from (with a var called i) 
       towards the beginning

    2) Start an inner loop with a variable called j
       from the beginning until i - 1

    3) If arr[i] is greater than arr[j + 1], swap those values

    4) Return sorted array
*/


function bubbleSort(arr) {
    var noSwaps;
    for (var i = arr.length; i > 0; i--) {
        noSwaps = true
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
              noSwaps = false
            }
        }
        if (noSwaps) break;
    }
    return arr
}

bubbleSort([1, 3, 2, 5, 4])