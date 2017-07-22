
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var placeholder = [];
for (i=0; i<arr.length;)
placeholder.push(arr.slice(i,i+=size));


return placeholder;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
