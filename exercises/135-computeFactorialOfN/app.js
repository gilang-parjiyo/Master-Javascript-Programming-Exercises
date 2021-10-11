function computeFactorialOfN(n) {
    // your code here
    let arrFactorial = Array.from({ length: n }, (_, i) => i + 1);
    let factorial = arrFactorial.reduce((a, b) => a * b);
    return factorial;
}

var output = computeFactorialOfN(3); console.log(output); // --> 6

var output = computeFactorialOfN(4); console.log(output); // --> 24