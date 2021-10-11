function getLengthOfLongestElement(arr) {
    // your code here
    return arr.length === 0 ? 0 : arr.reduce((acc, cur) => {
        if (acc.length < cur.length) { acc = cur };
        return acc;
    }, '').length;
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5