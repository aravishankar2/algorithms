function peek(stack) {
  return stack[stack.length - 1];
}

var balancedStringSplit = function (s) {
  let r = 0;
  let l = 0;

  let ans = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[i] === "L") {
      l++;
    } else {
      r++;
    }
    if (r === l) {
      ans++;
    }
  }

  return ans;
};
console.log(balancedStringSplit("RLRRRLLRLL"));
