function calculateFinal(){
    const gradeKey = { "D":30, "Dplus":40, "Cminus":45, "C":50, "Cplus":55, "Bminus":60, "B":65, "Bplus":70, "Aminus":75, "A":80 };

    document.getElementById("reqScores").style.visibility = "visible";
    document.getElementById("FZ").style.visibility = "hidden";

    const midtermScore = parseFloat(document.getElementById("mtScore").value);
    const hwAverage = parseFloat(document.getElementById("hwAvg").value);
    const quizAverage = parseFloat(document.getElementById("qAvg").value);

    if (isNaN(midtermScore) || isNaN(hwAverage) || isNaN(quizAverage) 
        || midtermScore > 100 || midtermScore < 0
        || hwAverage > 100 || hwAverage < 0 
        || quizAverage > 10 || quizAverage < 0) { 
            Object.keys(gradeKey).forEach(letterGrade => document.getElementById(letterGrade).innerText = "?");
            return;
        }
    
    if (midtermScore < 20) {
        document.getElementById("reqScores").style.visibility = "hidden";
        document.getElementById("FZ").style.visibility = "visible";
        return;
    }
    
    const mtContrib = midtermScore / 2.5;
    const hwContrib = hwAverage / 10;

    const currentTotal = mtContrib + hwContrib + quizAverage;
    
    Object.keys(gradeKey).forEach(letterGrade => {
        let requiredScore = (gradeKey[letterGrade] - currentTotal) * 2.5;

        if (requiredScore < 0)
            document.getElementById(letterGrade).innerText = "∅";
        else if (requiredScore > 100)
            document.getElementById(letterGrade).innerText = "∞";
        else
            document.getElementById(letterGrade).innerText = Math.ceil(requiredScore);
    });

}