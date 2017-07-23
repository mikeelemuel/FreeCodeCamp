/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.


Your goal is to fix the failing test.
First, run all the tests by clicking "Run code" or by pressing Control + Enter
The failing test is in red. Fix the code so that all tests pass. Then you can move on to the next
Bonfire.


Coded by Mike Lemuel Bacayo
mike.lemuelbacayo@gmail.com
http://www.freecodecamp.com/mikeelemuel


*/
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (str.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }

}

confirmEnding("Bastian", "n");
