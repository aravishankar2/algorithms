/* 
Given an array of positive integers arr, 
calculate the sum of all possible odd-length subarrays.

A subarray is a contiguous subsequence of the array.

Return the sum of all odd-length subarrays of arr.

Example 1:

Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58


Example 2:

Input: arr = [1,2]
Output: 3
Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.


Example 3:

Input: arr = [10,11,12]
Output: 66

Constraints:

    1 <= arr.length <= 100
    1 <= arr[i] <= 1000

*/

// helper gets the sum of our smaller arrays we create using our while / for loop.
let sumArray = (arr) => arr.reduce((acc, curr) => acc + curr);

let sumOddLengthSubarrays = (arr) => {
  /* 
    we start with one because the smallest 'odd' subarr is going to of length 1.
    we slice our array and get the sum of it, but we slice it by incrementing this len by
    '2' because we are trying to keep the subarr's odd, and our base case is when the len val
    is larger than our inputs length itself. As we iterate through our array using our for loop,
    we collect the sums in our ans value, that we return as our answer! 
  */

  let len = 1;
  let ans = 0;

  while (len <= arr.length) {
    for (let i = 0; i + len <= arr.length; i++) {
      ans += sumArray(arr.slice(i, i + len));
    }
    len += 2;
  }

  return ans;
};
