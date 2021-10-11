var obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
  // your code here
  let output = [];
  for (const prop in obj) {
    if (obj.hasOwnProperty(key) && Array.isArray(obj[prop])) {
      if (obj[prop].length === 0) return [];
      output = obj[prop].filter(item => item % 2 !== 0)
    } else return [];
  }
  return output;
}

var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]