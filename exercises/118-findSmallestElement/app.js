function findSmallestElement(arr) {
    // your code here
    return arr.length === 0 ? 0 : arr.sort((a, b) => a - b)[0];
}
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1