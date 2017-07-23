/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Your goal is to fix the failing test.
First, run all the tests by clicking "Run code" or by pressing Control + Enter
The failing test is in red. Fix the code so that all tests pass. Then you can move on to the next
Bonfire.


Coded by Mike Lemuel Bacayo
mike.lemuelbacayo@gmail.com
http://www.freecodecamp.com/mikeelemuel


*/
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var placeholder = [];
for (i=0; i<arr.length;)
placeholder.push(arr.slice(i,i+=size));


return placeholder;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
