/*
    Have the function SimpleSymbols(str) 
    take the str parameter being passed 
    and determine if it is an acceptable 
    sequence by either returning the string 
    true or false. 
    
    The str parameter will be composed of + 
    and = symbols with several characters between 
    them (ie. ++d+===+c++==a) and for the string to be 
    true each letter must be surrounded by a + symbol. 
    So the string to the left would be false. The string 
    will not be empty and will have at least one letter.

    *** Test Cases ** 
    
    Input:"+d+=3=+s+"
    Output:true

    Input:"f++d+"
    Output:false
*/

function SimpleSymbols(str) {
    /* 
        we need to tack on a character to the end and 
        before the string in order to ensure that we 
        can check the first and last letters properly:
    */
    var str = `=${str}=`
    // loop through string
    for (let i = 0; i < str.length; i++) {
        // check if character is a letter
        let letters = /[a-z]/i
        if (str[i].match(letters)) {
            let previous = str[i-1]
            let next = str[i+1]
            // return false if the prev or next characters are not '+'
            if (previous !== '+' || next !== '+') {
                return false
            }

        }
    }
    // else, return true
    return true
  }
 
  SimpleSymbols("+d=3=+s+")