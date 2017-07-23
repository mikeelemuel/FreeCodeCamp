/*
Return the length of the longest word in the provided sentence.

Your response should be a number.


Your goal is to fix the failing test.
First, run all the tests by clicking "Run code" or by pressing Control + Enter
The failing test is in red. Fix the code so that all tests pass. Then you can move on to the next
Bonfire.


Coded by Mike Lemuel Bacayo
mike.lemuelbacayo@gmail.com
http://www.freecodecamp.com/mikeelemuel


*/
function findLongestWord(str) {
  var words = str.split(' ');
   var longest = 0;

   for (var i=0;i<words.length;i++) {
        if (words[i].length > longest) {
             longest = words[i].length;
        }
   }

   return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
