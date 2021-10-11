// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
    let greatValue = [];
    for (const prop in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[prop] === 'object') {
            if (obj[prop].length === 0) return [];
            obj[prop].forEach(elem => {
                if (elem >= 10) greatValue.push(elem);
            });
        } else return [];
    }
    return greatValue;
}