function getLengthOfShortestElement(arr) {
    // your code here
    return arr.length === 0 ? 0 : arr.reduce((acc, curr) => {
        if (acc.length > curr.length) {
            acc = curr;
        }
        return acc;
    }).length
}
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3