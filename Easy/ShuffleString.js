/*
Given a string s and an integer 
array indices of the same length.

The string s will be shuffled such 
that the character at the ith position 
moves to indices[i] in the shuffled string.

Return the shuffled string.

*/

let strArr = [];

let s = "aiohn";

let indices = [3, 1, 4, 2, 0];

function ShuffleString(s, indices) {
  let obj = {};

  indices.map((_, i) => {
    obj[indices[i]] = s[i];
  });

  return Object.values(obj).join("");
}

console.log(ShuffleString(s, indices));
