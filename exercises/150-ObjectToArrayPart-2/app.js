function listAllValues(obj) {
  // your code here
  return Object.values(obj);
}

console.log(listAllValues({
  name: 'Krysten',
  age: 33,
  hasPets: false
}));