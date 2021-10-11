function repeatString(string, num) {
    // your code here
    let concatStr = ''
    for (let i = 1; i <= num; i++) {
        concatStr += string;
    }
    return concatStr;
}

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'