function flipEveryNChars(input, n) {
    // your code here
    let arrInput = input.split('');
    let flipArr = [];
    let terminator = 0;
    for (let i = 0; i < arrInput.length; i += n) {
        let iterator = i + n;
        for (let j = iterator; j > terminator; j--)
            flipArr.push(arrInput[j - 1]);
        terminator += n;
    }
    return flipArr.join('');
}

var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma