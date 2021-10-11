var obj = {

};

function getProductOfAllElementsAtProperty(obj, key) {
  if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
    for (const prop in obj) {
      if (obj[prop].length === 0) return 0;
      output = obj[prop].reduce((acc, cur) => acc * cur)
    }
  } else return 0;
  return output;
}
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24