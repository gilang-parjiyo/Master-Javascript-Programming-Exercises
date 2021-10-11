function getLongestWordOfMixedElements(arr) {
    // your code here
    let longestStr = '';
    arr.forEach(item => {
        if (longestStr === '' && typeof item === 'string')
            longestStr = item;
        if (typeof item === 'string' && longestStr.length < item.length)
            longestStr = item;
        else
            return longestStr;
    })
    return longestStr;
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'