/*
    Have the function TimeConvert(num) 
    take the num parameter being passed 
    and return the number of hours and 
    minutes the parameter converts to 
    (ie. if num = 63 then the output should 
    be 1:3). Separate the number of hours 
    and minutes with a colon.

    *** Test Cases ** 
    
    Input:126
    Output:2:6

    Input:45
    Output:0:45
*/

function TimeConvert(num) { 
    // divide num by 60 and round it down
    let hours = Math.floor(num / 60)
    // get remainder of input divided by 60
    let minutes = num % 60
    // concatenate
    return `${hours}:${minutes}`
}
     
TimeConvert(126)