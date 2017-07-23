/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Your goal is to fix the failing test.
First, run all the tests by clicking "Run code" or by pressing Control + Enter
The failing test is in red. Fix the code so that all tests pass. Then you can move on to the next
Bonfire.


Coded by Mike Lemuel Bacayo
mike.lemuelbacayo@gmail.com
http://www.freecodecamp.com/mikeelemuel


*/
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var truths = arr.filter(function(filterTrue) {
        return filterTrue;
    });
    return truths;
}

bouncer([7, "ate", "", false, 9]);
