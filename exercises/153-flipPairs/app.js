function flipPairs(input) {
    // your code here
    let inputStr = input.split('');
    let newStr = []
    for (let i = 0; i < inputStr.length; i += 2) {
        newStr.push(inputStr[i + 1]);
        newStr.push(inputStr[i]);
    }
    return newStr.join('');

}

var input = 'check';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
