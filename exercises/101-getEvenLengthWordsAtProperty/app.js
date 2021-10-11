var obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
  // your code here
  let output = []
  for (const prop in obj) {
    if (obj.hasOwnProperty(key) && Array.isArray(obj[prop])) {
      if (obj[prop].length === 0) return [];
      output = obj[prop].filter(item => item.length % 2 === 0);
    } else return [];
  }
  return output;
}

var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']