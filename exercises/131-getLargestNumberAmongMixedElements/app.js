function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let maxNum = 0;
    for (const item in arr) {
        if (typeof arr[item] === 'number') {
            if (maxNum < arr[item]) maxNum = arr[item];
        } 
    }
    return maxNum;
}

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5