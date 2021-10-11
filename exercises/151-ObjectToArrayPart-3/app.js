function convertObjectToList(obj) {
  // your code here
  let arrList = []
  for (const key in obj) {
    arrList.push([])
    let arrListLast = arrList.length - 1
    arrList[arrListLast].push(key)
    arrList[arrListLast].push(obj[key])
  }
  return arrList;
}

console.log(convertObjectToList({
  name: 'Holly',
  age: 35,
  role: 'producer'
}
));