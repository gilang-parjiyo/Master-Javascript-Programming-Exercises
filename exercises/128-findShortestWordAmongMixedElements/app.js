function findShortestWordAmongMixedElements(arr) {
    // your code here
    let shortestStr = '';
    arr.forEach((item, index) => {
        if (shortestStr === '' && typeof item === 'string')
            shortestStr = item;
        if (typeof item === 'string' && shortestStr.length > item.length)
            shortestStr = item;
        else
            return shortestStr;
    })
    return shortestStr;
}
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
