// Write your function here
function select(arr, obj) {
    let newObj = {};
    arr.forEach(element => {
        for (const key in obj)
            if (element === key) newObj[key] = obj[key];
    });
    return newObj;
}
