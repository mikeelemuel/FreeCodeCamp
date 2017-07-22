
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
