/*
Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.

Your goal is to fix the failing test.
First, run all the tests by clicking "Run code" or by pressing Control + Enter
The failing test is in red. Fix the code so that all tests pass. Then you can move on to the next
Bonfire.


Coded by Mike Lemuel Bacayo
mike.lemuelbacayo@gmail.com
http://www.freecodecamp.com/mikeelemuel


*/
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);
