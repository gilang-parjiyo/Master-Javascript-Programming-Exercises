function getAverageOfElementsAtProperty(obj, key) {
  let output = []
  let arrLen = 0;
  for (const prop in obj) {
    arrLen = obj[prop].length;
    if (obj.hasOwnProperty(key) && Array.isArray(obj[prop])) {
      if (obj[prop].length === 0) return 0;
      output = obj[prop].reduce((a, b) => a + b);
    } else return 0;
  }
  return output / arrLen;
}