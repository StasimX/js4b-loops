function listAll(min, max) {
  var result = "";
  for (var i=min; i<=max; i++){
    result = result + i + " ";
  }
  return result.trim();
}

function listBetweenDesc(min, max) {
  var result = "";
  max = max - 1;
  for (i=max; i>min; i--) {
    result = result + i + " ";
  }
  return result.trim();
}