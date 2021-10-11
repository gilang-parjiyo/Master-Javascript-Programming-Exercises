// Write your function here
function getNthElementOfProperty(obj, key, num) {
    for (const prop in obj) {
        if ((obj.hasOwnProperty(key)) && (typeof obj[prop] === 'object')) return obj[prop][num];
        else return undefined;
    }
}