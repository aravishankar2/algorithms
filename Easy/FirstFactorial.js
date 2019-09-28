/*
    Have the function FirstFactorial(num) 
    take the num parameter being passed and
    return the factorial of it. For example: 
    if num = 4, then your program should return 
    (4 * 3 * 2 * 1) = 24. For the test cases, 
    the range will be between 1 and 18 and the 
    input will always be an integer.

    *** Test Cases ** 
    
    Input:4
    Output:24

    Input:8
    Output:40320

    NOTE: We know that 0! and 1!
          are = 1, so we must check
          for that...
*/

function FirstFactorial(num) {
    /* Lets use recursion, which is essentially
       calling the function within itself based on
       a condition, until the condition doesn't hold
       true anymore
    */
    // first we check to see if our input is 0 or 1..
    if (num > 0 && num <= 1) {
        return 1
    } else {
    /* 
       EX: if we input 4, this will multiply 4 by
       3, then by 2...so on so forth 
    */
        return num * FirstFactorial(num - 1)
    }
}
     
FirstFactorial(4)  