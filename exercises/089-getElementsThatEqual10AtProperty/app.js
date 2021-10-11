// Write your function here
function getElementsThatEqual10AtProperty(obj, key) {
    let filteredArr = []
    for (const property in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key].length === 0) return [];
            for (const num in obj[key]) {
                if (obj[key][num] === 10) filteredArr.push(10);
            }
        } else return [];
    }
    return filteredArr;
}