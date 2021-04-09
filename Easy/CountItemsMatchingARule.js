/* 
You are given an array items, where each items[i] = [typei, colori, namei] 
describes the type, color, and name of the ith item. You are also given a rule 
represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

    ruleKey == "type" and ruleValue == typei.
    ruleKey == "color" and ruleValue == colori.
    ruleKey == "name" and ruleValue == namei.

Return the number of items that match the given rule.


Example 1:

Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
Output: 1

Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].


Example 2:

Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
Output: 2

Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.
 

Constraints:

    1 <= items.length <= 104
    1 <= typei.length, colori.length, namei.length, ruleValue.length <= 10
    ruleKey is equal to either "type", "color", or "name".
    All strings consist only of lowercase letters.
*/

var countMatches = function (items, ruleKey, ruleValue) {

  /*   
       ---------------------------------------------------------------------------------  
       Initially, this was my approach. Passed all test cases except for the last one..
       Turned out to be much simpler than this..dammit lol 
       ---------------------------------------------------------------------------------  
  */

  //     let modded = items.map((val, i) =>  [...val, i])
  //     let keys = ["type", "color", "name", "index"];

  //     let tuples = modded.map((sub, i) => {
  //        return sub.map((item, j) => [keys[j], item]);
  //     })

  //     let objects = tuples.map(item => Object.fromEntries(item))

  //     let answer = {}

  //     objects.map((obj) => {
  //         if (obj[ruleKey] === ruleValue) {
  //             answer = obj
  //         }
  //     })

  //     return answer.index

  // Much simpler and concise approach.

  let count = 0;
  for (let i = 0; i < items.length; ++i) {
    if (ruleKey === "type") {
      if (ruleValue === items[i][0]) count++;
    } else if (ruleKey === "color") {
      if (ruleValue === items[i][1]) count++;
    } else {
      if (ruleValue === items[i][2]) count++;
    }
  }
  return count;
};
