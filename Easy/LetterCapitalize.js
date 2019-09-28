/*
    Have the function LetterCapitalize(str) 
    take the str parameter being passed and 
    capitalize the first letter of each word. 
    Words will be separated by only one space.

    *** Test Cases ** 
    
    Input:"hello world"
    Output:Hello World

    Input:"i ran there"
    Output:I Ran There
*/

function LetterCapitalize(str) { 
    // Lets split up the sentence into words:
    let words = str.split(' ')
    /*  
        We want to push our modified words 
        in our split array to a temp array,
        which we can join back together later
    */
   let arr = []
    /*  
       For each word, lets replace 
       the first letter with the 
       uppercase version of it. 

       We can then push the modified 
       word to our temp array:
    */
    for(var i = 0; i < words.length; i++) {
      let modifiedWord = words[i].replace(words[i][0], words[i][0].toUpperCase())
      arr.push(modifiedWord) 
    }
    /* 
       We return the array, joined 
       back into a string 
    */
    return arr.join(' ')
}
 
LetterCapitalize("hello world")