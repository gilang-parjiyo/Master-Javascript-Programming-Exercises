// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
    let lessValue = [];
    for (const property in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key].length === 0) return [];
            obj[key].forEach(element => {
                if (element < 100) lessValue.push(element);
            });
        } else return [];
    }
    return lessValue;
}