/*

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.



Your goal is to fix the failing test.
First, run all the tests by clicking "Run code" or by pressing Control + Enter
The failing test is in red. Fix the code so that all tests pass. Then you can move on to the next
Bonfire.


Coded by Mike Lemuel Bacayo
mike.lemuelbacayo@gmail.com
http://www.freecodecamp.com/mikeelemuel
*/
function rot13(str) { // LBH QVQ VG!

  var newString = [];

  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
      newString.push(str.charAt(i));
    } else if (str.charCodeAt(i) > 77) {
      newString.push(String.fromCharCode(str.charCodeAt(i) - 13));
    } else {
      newString.push(String.fromCharCode(str.charCodeAt(i) + 13));
    }
  }
  return newString.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
