function words(str) {
  var result = {};
  var array = str.split(/\t|\n|\s*\s+/g);
  console.log(array);
  for (var i = 0; i < array.length; i++) {
    //continue skips that iteration and moves on to the next iteration
    if(array[i] === '') continue;
    if (!result[array[i]]) {
      result[array[i]] = 1;
    } else if (array[i] === 'toString') {
      result[array[i]] = 1;
    } else {
      result[array[i]]++;
    }
  }
  return result;
}

module.exports = words;

