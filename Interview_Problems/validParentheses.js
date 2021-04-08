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

const peek = (stack) => {
  return stack[stack.length - 1];
};

let validate = (arr) => {
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

console.log(validate("(())"));
