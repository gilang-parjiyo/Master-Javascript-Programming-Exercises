var obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
        for (const prop in obj) {
            let properties = obj[prop];
            if (properties.length === 0) return 0;
            return properties.reduce((a, b) => a + b);
        }
    } else return 0;
}
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13