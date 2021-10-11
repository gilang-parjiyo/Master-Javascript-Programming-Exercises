// Write your function here
function getAverageOfElementsAtProperty(obj, key) {
    let total = 0;
    let itemCounts = 0;

    //
    if (obj.hasOwnProperty(key)) {
        if (obj[key].length === 0) return 0
        for (const num in obj[key]) {
            total += obj[key][num];
            itemCounts += 1;
        }
    } else return 0;

    return (total / itemCounts);
}
var obj = {
    key: []
};

console.log(getAverageOfElementsAtProperty(obj, "keys"));

