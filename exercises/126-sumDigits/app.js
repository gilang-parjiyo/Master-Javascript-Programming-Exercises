function sumDigits(num) {
    // your code here
    return num.toString().match(/-\d|\d/g)
        .reduce((a, b) => Number(a) + Number(b), 0);
}
var output = sumDigits(-316);
console.log(output); // --> 4

