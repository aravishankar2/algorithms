/*
    Have the function AlphabetSoup(str) 
    take the str string parameter being 
    passed and return the string with 
    the letters in alphabetical order 
    (ie. hello becomes ehllo). Assume 
    numbers and punctuation symbols 
    will not be included in the string.

    *** Test Cases ** 
    
    Input:"coderbyte"
    Output:bcdeeorty

    Input:"hooplah"
    Output:ahhloop
*/

function AlphabetSoup(str) { 
    // using regex, get all numbers, and all punctuations 
    let punctuation = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g
    let numbers = /[0-9]/g
    /* process the arg, replacing 
       all numbers and punctuation
       from it 
    */
    let dePunctuated = str.replace(punctuation, '')
    let deNumbered = dePunctuated.replace(numbers, '')
    // split it, sort it, join it, return it, bop it..(shout out to my childhood)
    return deNumbered.split('').sort().join('')
  }
     
AlphabetSoup("hooplah")