function multiply(num1, num2) {
    // your code here
    let multiply = 0;
    for (let i = 1; i <= Math.abs(num2); i++) {
        multiply += num1;
    }

    return (num1 < 0 || num2 < 0) ? -multiply : multiply
}

var output = multiply(4, 7);
console.log(output); // --> 28