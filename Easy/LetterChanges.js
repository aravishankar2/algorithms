/*
    Have the function LetterChanges(str) 
    take the str parameter being passed 
    and modify it using the following algorithm. 

    Replace every letter in the string 
    with the letter following it in the 
    alphabet (ie. c becomes d, z becomes a). 

    Then capitalize every vowel in this new 
    string (a, e, i, o, u) and finally 
    return this modified string. 

    *** Test Cases ** 
    
    Input:"hello*3"
    Output:Ifmmp*3

    Input:"fun times!"
    Output:gvO Ujnft!
*/

function LetterChanges(str) { 
    /*  In order to solve this, we need to use
        the .replace method on our string. 
            - The first param is what letters we're targeting,
            - The second param is what we're replacing the letter with 
              (which will be a callback function)
    */

    /* 
        The first param will be every letter in the alphabet.
        We can create a regex var to grab every letter:
    */
    let everyLetter = /[a-zA-z]/g
    /*  Using character codes, we loop through the string, and we replace our
        current index, x, with that character code + 1 (the next letter)
    */
    let modStr = str.replace(everyLetter, x => {
        return String.fromCharCode(x.charCodeAt(0) + 1) 
    })
    // Now we replace all vowels with the uppercase version:
    let vowels = /[aeiou]/g
    let modVowelStr = modStr.replace(vowels, v => { 
        return v.toUpperCase()
    })
    
    return modVowelStr
  }
 
  LetterChanges("fun times!"); 