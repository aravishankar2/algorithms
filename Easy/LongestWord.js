/*
    Have the function LongestWord(sen) take the 
    sen parameter being passed and return the 
    largest word in the string. If there are 
    two or more words that are the same length, 
    return the first word from the string with 
    that length. 
    
    Ignore punctuation and assume sen will 
    not be empty.

    *** Test Cases ***

    Input:"fun&!! time"
    Output:time

    Input:"I love dogs"
    Output:love 
*/

function LongestWord(sen) { 
    /* First, lets remove every punctuation mark
       from the string (!&.?,@#$%^*()_+-={})
    */
    let regex = /[!&.?,@#$%^*()_+-={}]/g;
    let replaced = sen.replace(regex, '')
    // split the sentence into words
    let splitted = replaced.split(' ')
    // compare the array length with 0
    let initLength = 0
    let longest; 
    for (let i = 0; i < splitted.length; i++) {
        if(splitted[i].length > initLength) {
            initLength = splitted[i].length
            longest = splitted[i]
        }
    }
    return longest
  }

LongestWord("fun&!! time")