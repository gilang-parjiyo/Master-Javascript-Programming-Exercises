// Write your function here
function getFirstElementOfProperty(obj, key) {
    for (const prop in obj) {
        if ((obj.hasOwnProperty(key)) && (typeof obj[key] === 'object')) return obj[key][0];
        else return undefined;
    }
}

var obj = {
    key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1