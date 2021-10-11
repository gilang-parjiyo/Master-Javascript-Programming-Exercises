function countCharacter(str, char) {
    // your code here
    let counts = 0;
    for (const item in str) {
        if (str[item] === char) counts++;
    }
    return counts;
}