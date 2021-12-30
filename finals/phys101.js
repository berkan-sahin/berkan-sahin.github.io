function calculateFinal() {
    const gradeKey = { "D": 40, "Dplus": 45, "Cminus": 50, "C": 55, "Cplus": 65, "Bminus": 70, "B": 75, "Bplus": 80, "Aminus": 85, "A": 90 };

    document.getElementById("reqScores").style.visibility = "visible";
    document.getElementById("FZ").style.visibility = "hidden";

    // Midterms
    const midterm1Score = parseFloat(document.getElementById("mt1Score").value);
    const midterm2Score = parseFloat(document.getElementById("mt2Score").value);

    // Lab Work
    const exp1Score = parseFloat(document.getElementById("exp1Score").value);
    const exp2Score = parseFloat(document.getElementById("exp2Score").value);
    const exp3Score = parseFloat(document.getElementById("exp3Score").value);
    const proposalScore = parseFloat(document.getElementById("proposalScore").value);
    const projVideo = parseFloat(document.getElementById("projVideo").value);
    const finalReport = parseFloat(document.getElementById("finalReport").value);

    const hwAverage = parseFloat(document.getElementById("hwAvg").value);
    const quizAverage = parseFloat(document.getElementById("qAvg").value);

    if (isNaN(hwAverage) || isNaN(quizAverage)
        || hwAverage > 100 || hwAverage < 0
        || quizAverage > 10 || quizAverage < 0) {
        Object.keys(gradeKey).forEach(letterGrade => document.getElementById(letterGrade).innerText = "?");
        return;
    }

    const hwContrib = hwAverage / 10;
    const mtContrib = (midterm1Score * 0.15) + (midterm2Score / 5);
    const labGrade = (exp1Score + exp2Score + exp3Score + proposalScore) * 0.15 + finalReport / 10 + projVideo * 3;
    const currentTotal = mtContrib + hwContrib + quizAverage + (labGrade / 5);

    if (mtContrib < 10.5 || labGrade < 60) {
        document.getElementById("reqScores").style.visibility = "hidden";
        document.getElementById("FZ").style.visibility = "visible";
        return;
    }

    Object.keys(gradeKey).forEach(letterGrade => {
        let requiredScore = (gradeKey[letterGrade] - currentTotal) * 4;

        if (requiredScore < 0)
            document.getElementById(letterGrade).innerText = "∅";
        else if (requiredScore > 100)
            document.getElementById(letterGrade).innerText = "∞";
        else
            document.getElementById(letterGrade).innerText = Math.ceil(requiredScore);
    });

}