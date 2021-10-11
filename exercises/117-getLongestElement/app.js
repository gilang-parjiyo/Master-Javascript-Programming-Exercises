function getLongestElement(arr) {
    // your code here
    return arr.length === 0 ? '' : arr.sort((a, b) => b.length - a.length)[0];
}
var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'