function findShortestElement(arr) {
    // your code here
    return arr.length === 0 ? '': arr.sort((a, b) => a.length - b.length)[0];
}
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'