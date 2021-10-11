function getLargestElement(arr) {
  // your code here
  return arr.length === 0 ? 0 : arr.sort((a, b) => b - a)[0];
}
var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;