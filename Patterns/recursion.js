// How Recursion Works:

/*
    Invoke the same function
    with a different input 
    until you reach your 
    base case
*/

// Two Essential parts of a recursive function

//  1) Base Case (where the recursion ends)
//  2) Different Input



function countDown(num) {
    if (num <= 0) {
        console.log('all done')
        return
    }
    console.log(num)
    num--
    countDown(num)
}

countDown(10)


function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1)
}

console.log(sumRange(8))

// another example:

/* TIP: for arrays, use methods like
        slice, the spread operator, and 
        concat that make copies of arrays
        so you do not mutate them.

        strings are immutable so you
        will need to use methods like 
        slice, substr, or substring to
        make copies of strings.

        to make copies of objects, use 
        Object.assign, or the spread operator
 */

function collectOddValues(arr) {
    let newArr = []

    if (arr.length === 0) {
        return newArr
    }

    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)))

    return newArr
}


console.log(collectOddValues([1, 2, 3, 5, 6, 7]))