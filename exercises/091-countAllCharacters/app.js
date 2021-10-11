// Write your function here
function countAllCharacters(str = '') {
    let output = {};
    str.split('').forEach(elem => {
        if (!output.hasOwnProperty(elem)) output[elem] = 1;
        else output[elem]++;
    });
    return output;
}
console.log(countAllCharacters('banana'));