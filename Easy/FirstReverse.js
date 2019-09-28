/*
    Have the function FirstReverse(str) 
    take the str parameter being passed 
    and return the string in reversed order. 

    For example: if the input string is 
    "Hello World and Coders" then your 
    program should return the string 
    sredoC dna dlroW olleH. 

    *** Test Cases ** 
    
    Input:"coderbyte"
    Output:etybredoc

    Input:"I Love Code"
    Output:edoC evoL I
    
*/

function FirstReverse(str) { 
    /* Lets split up the string into an array,
       reverse it, then join it */
    let splitted = str.split('').reverse().join('')
    return splitted; 
  }
 
FirstReverse("I Love Code");    