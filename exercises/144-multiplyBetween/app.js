function multiplyBetween(num1, num2) {
    // your code here
    let result = 0;
    if (num2 < num1)
        return 0;
    for (let i = num1; i < num2 - 1; i++) {
        if (result === 0) result = i;
        result *= (i + 1);
    }
    return result;
}

var output = multiplyBetween(2, 5);
console.log(output); // --> 24