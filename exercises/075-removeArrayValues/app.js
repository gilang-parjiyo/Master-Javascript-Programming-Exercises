function removeArrayValues(obj) {
    // your code here
    for (const key in obj) {
        // delete property array
        if(typeof obj[key] === 'object') delete obj[key];
    }
    return obj;
}
