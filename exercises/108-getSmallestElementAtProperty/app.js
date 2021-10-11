var obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
  // your code here
  let output = []
  for (const prop in obj) {
    if (obj.hasOwnProperty(key) && Array.isArray(obj[prop])) {
      if (obj[prop].length === 0) return [];
      output = obj[prop].reduce((acc, cur) => { if (acc > cur) acc = cur; return acc })
    } else return [];
  }
  return output;
}
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
