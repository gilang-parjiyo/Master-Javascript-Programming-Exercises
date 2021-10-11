function fromListToObject(array) {
  // your code here
  let obj = {};
  array.forEach(item => {
    obj[item[0]] = item[1];
  })
  return obj;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // => { make: 'Ford', model: 'Mustang', year: 1964 }