function isEvenWithoutModulo(num) {
    // your code her
    let equotient = parseInt(num / 2);
    let product = 2 * equotient;
    let modulo = num - product;

    return modulo === 0;
}
var output = isEvenWithoutModulo(8);
console.log(output); // --> true