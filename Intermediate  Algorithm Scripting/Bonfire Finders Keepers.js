/*
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Your goal is to fix the failing test.
First, run all the tests by clicking "Run code" or by pressing Control + Enter
The failing test is in red. Fix the code so that all tests pass. Then you can move on to the next
Bonfire.


Coded by Mike Lemuel Bacayo
mike.lemuelbacayo@gmail.com
http://www.freecodecamp.com/mikeelemuel


*/
function findElement(arr, func) {
  var num;

  // Loop thorugh the array and use the function to check
  for (var a = 0; a < arr.length; a++) {
    if (func(arr[a])) {
      // Store the first case and break the loop
      num = arr[a];
      return num;
    }
  }

  // otherwise return undefined
  return num;
}

findElement([1, 2, 3, 4], function(num) {
  return num % 2 === 0;
});


findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
