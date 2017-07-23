/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

Your goal is to fix the failing test.
First, run all the tests by clicking "Run code" or by pressing Control + Enter
The failing test is in red. Fix the code so that all tests pass. Then you can move on to the next
Bonfire.


Coded by Mike Lemuel Bacayo
mike.lemuelbacayo@gmail.com
http://www.freecodecamp.com/mikeelemuel


*/
function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num < 0)
    return "";
  if(num === 1)
    return str;
  else
    return str + repeatStringNumTimes(str, num - 1);
}

repeatStringNumTimes("abc", 4 );
