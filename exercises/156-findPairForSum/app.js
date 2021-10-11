function findPairForSum(array, number) {
    let pair = [];
    for (let i = 0; i < array.length; i++) {
        for (const item in array) {
            if (array[i] + array[item] === number) {
                pair.push(array[item]);
                pair.push(array[i]);
            }
        }
    }
    return pair /* [pair[pair.length - 2], pair[pair.length - 1]]; */
}

var pair = findPairForSum([1, 2, 3, 4, 5], 7);
console.log(pair); // --> [4, 5]