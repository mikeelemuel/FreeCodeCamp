/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Your goal is to fix the failing test.
First, run all the tests by clicking "Run code" or by pressing Control + Enter
The failing test is in red. Fix the code so that all tests pass. Then you can move on to the next
Bonfire.


Coded by Mike Lemuel Bacayo
mike.lemuelbacayo@gmail.com
http://www.freecodecamp.com/mikeelemuel


*/
function smallestCommons(arr) {
  var min = Math.min.apply(null, arr);
    var max = Math.max.apply(null, arr);
    var grandLCM;

    for (var i=min; i<max; i++) {
        if(i===min){
            grandLCM = (i * (i+1))/gcd(i, i+1);
        }else{
            grandLCM = (grandLCM * (i+1))/gcd(grandLCM, i+1);
        }
    }

    return grandLCM;

    function gcd(x, y) {    // Implements The Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}


smallestCommons([1,5]);
