function convertScoreToGrade(score) {
    // your code here
    let output = 'INVALID SCORE';
    switch (true) {
        case (score < 60):
            output = 'F';
            break;
        case (score < 70):
            output = 'D';
            break;
        case (score < 80):
            output = 'C';
            break;
        case (score < 90):
            output = 'B';
            break;
        case (score <= 100):
            output = 'A';
            break;
    }
    return output;
}

var output = convertScoreToGrade(59);
console.log(output); // --> 'A'