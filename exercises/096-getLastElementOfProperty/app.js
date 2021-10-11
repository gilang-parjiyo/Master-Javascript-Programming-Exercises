// Write your function here
function getLastElementOfProperty(obj, key) {
    for (const prop in obj) {
        if (obj.hasOwnProperty(key)) return obj[prop][obj[prop].length - 1];
        else return undefined;
    }
}