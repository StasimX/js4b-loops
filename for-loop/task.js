function listAll(min, max) {
  var result = "";
  for (var i=min; min<=max; min++){
    result = result + min + " ";
  }
  return result.trim();
}

/////// console.log(listAll(-2, 6));

function listBetweenDesc(min, max) {
  // var result = '3 2';
  var result = "";
  max = max - 1;
  for (i=max; max>min; max--) {
    result = result + max + " ";
  }
  return result.trim();
}

///// console.log(listBetweenDesc(1, 10));