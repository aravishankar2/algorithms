// Selection Sort

/*
    Similar to bubble sort,
    but instead of first placing
    large values into sorted position,
    we place small values into sorted position  
*/

/*

    1) Store the first element as the smallest
       value you've seen so far
    2) Compare this item to the next item in the array
       until you find a smaller number
    3) If a smaller number is found, designate that 
       smaller number to be the new 'minimum' and continue
       to the end of the array
    4) Repeat this with the next element until the array is sorted

*/

function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        let min = i
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (i !== min){
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }
    return arr
}

selectionSort([34, 22, 10, 19, 17])