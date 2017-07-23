/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Your goal is to fix the failing test.
First, run all the tests by clicking "Run code" or by pressing Control + Enter
The failing test is in red. Fix the code so that all tests pass. Then you can move on to the next
Bonfire.


Coded by Mike Lemuel Bacayo
mike.lemuelbacayo@gmail.com
http://www.freecodecamp.com/mikeelemuel


*/
function destroyer(arr) {
  // Remove all the values
// Create an array of arguments using the arguments object
var myArguments = [];
for (var i = 1; i < arguments.length; i++) {
myArguments.push(arguments[i]);
}
// Return arr after filtering values in myArguments
return arr.filter( function(remove) {
  return myArguments.indexOf(remove) < 0;
});
 }

destroyer(["tree", "hamburger", 53], "tree", 53);
