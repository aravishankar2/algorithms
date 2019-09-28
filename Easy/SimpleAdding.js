/*
    Have the function SimpleAdding(num) 
    add up all the numbers from 1 to num. 
    For example: if the input is 4 then 
    your program should return 10 because 
    1 + 2 + 3 + 4 = 10. For the test cases, 
    the parameter num will be any number from 
    1 to 1000. 

    *** Test Cases ** 
    
    Input:12
    Output:78

    Input:140
    Output:9870
*/

function SimpleAdding(num) { 
    // Lets initialize our result as 0 
    let result = 0
    // we loop from 1 to our input
    for (let i = 1; i <= num; i++) {
        // 1 + (1+1) + ((1+1) + 1)...etc
        result = result + i
    }
    console.log(result)
    return result
  }
 
SimpleAdding(140);