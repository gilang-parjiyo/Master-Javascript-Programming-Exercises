var obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
  // your code here
  let output = [];
  for (const prop in obj) {
    if (obj.hasOwnProperty(key) && Array.isArray(obj[prop])) {
      if (obj[prop].length === 0) return [];
      output = obj[prop].map(item => item * item);
    } else return [];
  }
  return output;
}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]