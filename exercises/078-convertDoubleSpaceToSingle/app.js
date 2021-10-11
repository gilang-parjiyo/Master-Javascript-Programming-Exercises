function convertDoubleSpaceToSingle(str) {
    // your code here
    return str.split('  ').join(' ');
}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"