function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let arrWord = Array.from(arguments);
    return arrWord.reduce((acc, curr) => {
        if (acc.length < curr.length) acc = curr;
        return acc;
    }, '')
}

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'