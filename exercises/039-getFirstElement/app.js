function getFirstElement(array) {
  // your code here
  return array.length === 0 ? undefined : array[0];
}

var output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output); // --> 1