function joinArrayOfArrays(arr) {
  // your code here
  // return arr.flat(Infinity);
  return arr.reduce((a, b) => a.concat(b));
}
var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']