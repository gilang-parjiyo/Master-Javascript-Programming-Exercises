function transformEmployeeData(array) {
  // your code here
  let newObj = []
  for (let i = 0; i < array.length; i++) {
    newObj.push({})
    for (const key in array[i]) {
      let prop = array[i][key][0]
      let value = array[i][key][1]
      newObj[i][prop] = value
    }
  }
  return newObj;

}

console.log(transformEmployeeData([
  [
    ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
  ],
  [
    ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
  ]
]));