/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".


Your goal is to fix the failing test.
First, run all the tests by clicking "Run code" or by pressing Control + Enter
The failing test is in red. Fix the code so that all tests pass. Then you can move on to the next
Bonfire.


Coded by Mike Lemuel Bacayo
mike.lemuelbacayo@gmail.com
http://www.freecodecamp.com/mikeelemuel


*/
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
titleCase("I'm a little tea pot");
