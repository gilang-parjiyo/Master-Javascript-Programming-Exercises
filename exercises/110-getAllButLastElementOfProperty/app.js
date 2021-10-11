var obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
  // your code here
  let output = []
  for (const prop in obj) {
    if (obj.hasOwnProperty(key) && Array.isArray(obj[prop])) {
      if (obj[prop].length === 0) return [];
      output = obj[prop].slice(0, obj[prop].length - 1)
    } else return [];
  }
  return output;
}

var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]