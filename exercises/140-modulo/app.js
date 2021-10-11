function modulo(num1, num2) {
    // your code here
    // get only integer number
    let quotient = parseInt(num1 / num2);
    let product = quotient * num2;
    return num1 - product;

}

var output = modulo(25, 4);
console.log(output); // --> 1