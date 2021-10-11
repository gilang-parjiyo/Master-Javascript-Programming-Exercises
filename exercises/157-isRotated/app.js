function isRotated(str1, str2) {
    // your code here
    let rotate
    for (let i = 0; i < str2.length; i++) {
        if (str1[0] === str2[i]) {
            rotate = str2.slice(i) + str2.slice(0, i);
            break;
        }
    }
    return rotate === str1

}

console.log(isRotated('hello world', 'orldhello w')) // => true
console.log(isRotated('hello world', 'omrel wp')) // => false