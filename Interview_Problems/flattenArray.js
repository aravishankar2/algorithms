// given a multidimensional array, flatten it into a single array using recursion

let flatten = (arr) => {
  //     This is our "result" array that we will be pushing our elements that are not of type array into, and then returning as our answer.
  let result = [];

  //     We can loop through our array and determine which items are not arrays and which ones are. We must figure out how to fit recursion into the mix as to create a scalable function that does not care about how many levels of nesting there are.

  //     we can start off with a basic loop:
  for (var i = 0; i < arr.length; i++) {
    //         we handle the case that the current index is an array
    if (Array.isArray(arr[i])) {
      result.push(...flatten(arr[i]));
    } else {
      //         if the item is not an array, we simply push it to the array
      result.push(arr[i]);
    }
  }

  //     finally, we can return our populated results array
  return result;
};

flatten([1, 2, 3, 4, [5, 6, 7, 8, [9, 10, 11]]]);
