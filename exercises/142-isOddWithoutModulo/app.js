function isOddWithoutModulo(num) {
    // your code here
    let quotient = parseInt(num / 2);
    let product = quotient * 2;
    let modulo = num - product;
    return modulo !== 0;
}
var output = isOddWithoutModulo(17);
console.log(output); // --> true

