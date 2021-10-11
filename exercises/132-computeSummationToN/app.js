function computeSummationToN(n) {
    // your code here
    let arr = Array.from({ length: n }, (_, i) => i + 1)
    return arr.reduce((a, b) => a + b);
}

var output = computeSummationToN(6);
console.log(output); // --> 21