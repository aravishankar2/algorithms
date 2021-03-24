/*
Given a string s, return the longest palindromic substring in s.

ex: 
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
*/

const longestPalindromicSubstr = (s) => {
  if (s == null || s.length < 1) return "";

  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < s.length; i++) {
    // handling an odd number of letters in a palindrome (ie: 'racecar')
    //   checking 'e' and 'e' as a midpoint, and since they match up, you can expand from there
    let odd = expandFromMiddle(s, i, i);
    // handling an even number of letters in a palindrome (ie: 'aabbaa')
    //  checking 'b' and then 'b' next to it, and since they match up, you can expand from there
    let even = expandFromMiddle(s, i, i + 1);
    // one of the cases is going to wind up being longer, so we want to take the longer one
    let longestPalindrome = Math.max(odd, even);

    if (longestPalindrome > p2 - p1) {
      p1 = i - ((longestPalindrome - 1) / 2);
      p2 = i + (longestPalindrome / 2);
    }
  }
  return s.substring(p1, p2 + 1);
};

let expandFromMiddle = (str, left, right) => {
  // if your string doesn't exist or your pointers have crossed, return 0
  if (str == null || left > right) return 0;

  //   while your pointers have yet to reach the end of the string bounds working their way outwards, and while your current index values are equal, decrement the left and increment the right indexes.
  while (
    left >= 0 &&
    right <= str.length &&
    str.charAt(left) == str.charAt(right)
  ) {
    left--;
    right++;
  }
  //   when the while loop breaks out, we return the length of our palindrome by subtracting the right and left pointers distance.
  return right - left - 1;
};


console.log(longestPalindromicSubstr("asdasdracecarassdsdsd"))