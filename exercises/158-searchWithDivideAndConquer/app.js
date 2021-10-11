function search(array, value) {
  // your code here
  let midPoint;
  let half = array;
  let divider = half.length - 1;

  for (let i = 0; i < array.length; i++) {
    midPoint = Math.floor(divider / 2)
    if (value === half[midPoint]) return array.indexOf(half[midPoint]);
    else if (half[midPoint] < value) {
      half = half.slice(midPoint + 1)
      divider = half.length - 1;
    } else {
      half = half.slice(midPoint - 1, midPoint)
      divider = half.length - 1;
    }
  }
  return null;
}

var arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // => 4