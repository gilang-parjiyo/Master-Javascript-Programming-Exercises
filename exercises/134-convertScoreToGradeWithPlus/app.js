function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    let output = '';
    switch (true) {
        case (score < 60 && score >= 0):
            output = 'F';
            break;
        case (score < 70 && score >= 60):
            output = 'D';
            break;
        case (score < 80 && score >= 70):
            output = 'C';
            break;
        case (score < 90 && score > 80):
            output = 'B';
            break;
        case (score <= 100 && score > 90):
            output = 'A';
            break;
        default:
            output = 'INVALID SCORE';
            break;
    }

    function gradePlusMinus(score, output) {
        let grade = score.toString();
        grade = Number(grade[grade.length - 1]);

        if (grade >= 0 && grade <= 2 && score)
            return `${output}-`;
        else if (grade >= 8 && grade <= 9)
            return `${output}+`;
        else
            return output
    }

    if (output !== 'F' && output !== 'INVALID SCORE')
        output = gradePlusMinus(score, output);

    return output
}

var output = convertScoreToGradeWithPlusAndMinus(100);
console.log(output); // --> 'A-'