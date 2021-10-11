function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let arrWord = Array.from(arguments);
    return arrWord.reduce((acc, cur) => {
        if(acc.length > cur.length) acc = cur;
        return acc;
    })
}
var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'