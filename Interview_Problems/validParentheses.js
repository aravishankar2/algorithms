// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

/* IMPORTANT: the below solution is for a string just containing '()'. See bottom one for more indepth solution */

// const peek = (stack) => {
//   return stack[stack.length - 1];
// };

let validateOnlyParens = (arr) => {
  let stack = [];

  for (var i = 0; i < arr.length; i++) {
    let val = arr[i].charAt();
    if (val === "(") {
      stack.push(val);
    } else if (val === ")") {
      if (peek(stack) === "(") {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// console.log(validate("()"));

let str = "()[]{}";

let validBrackets = (s) => {
  let obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let stack = [];

  for (let char of s) {
    if (obj[char]) {
      stack.push(obj[char]);
      console.log(stack)
    } else {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }
  // checking if stack is empty
  return !stack.length;
};

console.log(validBrackets("([)]"))
