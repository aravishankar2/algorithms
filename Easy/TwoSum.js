/* Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

*/

// More complex solution using for in, see below solution for simpler solution

// const TwoSumUnsorted = (nums, target) => {
//     let obj = {}
//     for(let [key, val] of nums.entries()) {
//         if(obj[val] !== undefined) return [obj[val], key]
//         obj[target - val] = key
//     }
// }

function TwoSumUnsorted(nums, target) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in obj) {
      // checking to see if corresponding number is stored as a 'key' in obj, with the val being its index
      // when this code actually runs and we do find the corresponding val, we return an array with the indexes of the numbers (our values)
      // as we iterate and it's not, we jump to else to start storing it in our hash
      console.log(obj);
      return [obj[target - nums[i]], i];
    } else {
      // store actual values as our 'keys', and their indexes as the values (ie: { '2': 0, '7': 1, '11': 2, etc.})
      console.log(obj);
      obj[nums[i]] = i;
    }
  }
  //   if nothing adds up to targets in the array, we just return -1
  return -1;
}

console.log(TwoSumUnsorted([2, 7, 11, 15], 17));

// Example where the array is sorted, we cana use pointers for this approach
let exampleArr = [1, 3, 6, 7, 10, 15];

let TwoSumSortedArr = (nums, target) => {
  let p1 = 0;
  let p2 = nums.length - 1;
  // if target value is equal than sum of indexes
  // else if target value is greater than sum of indexes
  // rlse if target value is smaller than sum of indexes
  // if target value is not in there
  while (p2 > p1) {
    if (target === nums[p1] + nums[p2]) {
      return [p1, p2];
    } else if (target > nums[p1] + nums[p2]) {
      p1++;
    } else if (target < nums[p1] + nums[p2]) {
      p2--;
    } else {
      return "not in here";
    }
  }
};

console.log(TwoSumSortedArr(exampleArr, 8));
