
var obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
  // your code here
  let output = []
  for (const prop in obj) {
    if (obj.hasOwnProperty(key) && Array.isArray(obj[prop])) {
      if (obj[prop].length === 0) return [];
      output = obj[prop].filter(item => item % 2 === 0);
    } else return [];
  }
  return output;
}
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]