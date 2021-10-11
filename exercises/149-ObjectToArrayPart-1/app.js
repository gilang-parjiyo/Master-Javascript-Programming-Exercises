function getAllKeys(obj) {
  // your code here
  return Object.keys(obj)
}

console.log(getAllKeys({
  name: 'Sam',
  age: 25,
  hasPets: true
}));