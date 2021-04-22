/* 
Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.

 

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0
 

Constraints:

    1 <= nums.length <= 100
    1 <= nums[i] <= 100
*/

var numIdenticalPairs = function (nums) {
  let p1 = 0;
  let p2 = 1;

  let samesies = [];

  while (p1 < nums.length) {
    let len = nums.length - 1;

    for (var i = 0; i < len; i++) {
      if (p2 < nums.length + 1) {
        samesies.push([nums[p1], nums[p2]]);
        p2++;
      }
    }

    p1++;
    p2 = p1 + 1;
  }

  return samesies.filter((arr) => arr[1] === arr[0]).length;
};

let vals = [1, 1, 1, 1];

console.log(numIdenticalPairs(vals));
