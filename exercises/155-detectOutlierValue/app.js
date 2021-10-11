function detectOutlierValue(string) {
    // your code here
    let obj = [{ odd: 0, poss: 0 }, { even: 0, poss: 0 }];
    let strArr = string.split(' ');
    for (let i = 0; i < strArr.length; i++) {

        if (Number(strArr[i]) % 2 === 0) {
            obj[1].even += 1;
            obj[1].poss = i + 1;

        }
        else if (Number(strArr[i]) % 2 !== 0) {
            obj[0].odd += 1;
            obj[0].poss = i + 1;
        }
    }

    let poss = 0;
    console.log(obj[0]);
    if (obj[0].odd < obj[1].even) poss = obj[0].poss;
    else poss = obj[1].poss;

    return poss;


}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
// console.log(detectOutlierValue("1 10 1 1"))  //=> 2