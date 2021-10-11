function getStringLength(string = '') {
    // your code here
    let stringLengh = 0;
    string.split('').forEach(() => stringLengh += 1);
    return stringLengh;
}

var output = getStringLength('hello');
console.log(output); // --> 5