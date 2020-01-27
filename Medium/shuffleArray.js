let input = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// We need to know about the Fisher-Yates algorithm.

/*  
    How the algorithm works is that 
    you loop through the input array backwards,
    and for every index you replace that index
    with a random number between 0 and the 
    current index.
*/

let arrayShuffle = function(arr) {
    // we need a new position to replace our current index with
    let newPos, temp;
    for (let i = arr.length - 1; i > 0; i--) {
        // We establish our new position through creating a random numbers
        newPos = Math.floor(Math.random() * (i + 1))
        temp = arr[i]
        arr[i] = arr[newPos]
        arr[newPos] = temp

    }
    // console.log(arr)
    return arr
}

arrayShuffle(input)