// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
    let odd = []
    for (const prop in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[prop] === 'object') {
            if (obj.length === 0) return [];
            odd = obj[prop].filter(item => (item.length % 2 !== 0));
        } else return [];
    }
    return odd;
}