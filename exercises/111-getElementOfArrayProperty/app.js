var obj = {
    key: ['Jamil', 'Albrey']
};
function getElementOfArrayProperty(obj, key, index) {
    for (const prop in obj) {
        if (obj.hasOwnProperty(key) && Array.isArray(obj[prop])) {
            if (obj[prop].length === 0) return undefined;
            return obj[prop][index]
        } else return undefined;
    }
}
var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'