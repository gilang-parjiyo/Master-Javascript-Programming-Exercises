// Write your function here
function getIndexOf(char, sentence) {
    for (let i = 0; i < sentence.length; i++) {
        if(char === sentence[i]) return i;
    }
    return -1;
}

console.log(getIndexOf('a', 'I am a hacker'));