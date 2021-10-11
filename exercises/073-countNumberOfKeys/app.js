function countNumberOfKeys(obj = {}) {
    // your code here
    let counts = 0;
    for (const key in obj) counts++;

    return counts;
}