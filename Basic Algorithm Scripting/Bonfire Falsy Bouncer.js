
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var truths = arr.filter(function(filterTrue) {
        return filterTrue;
    });
    return truths;
}

bouncer([7, "ate", "", false, 9]);
