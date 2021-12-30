function calculateFinal(){
    const gradeKey = { "D":50, "D+":55, "C-":60, "C":65, "C+":70, "B-":75, "B":80, "B+":85, "A-":90, "A":95 };

    let essay1 = document.getElementById("essay1").value;
    let essay2 = document.getElementById("essay2").value;
    let oral = document.getElementById("oral").value;
    let disc = document.getElementById("disc").value;
    let summary = document.getElementById("summary").value;
    let prog = document.getElementById("prog").value;
    let final = document.getElementById("final").value;

    essay1 = essay1 * 20 / 22;
    essay2 = essay2 * 25 / 22;
    final = final * 25 / 22;
    oral = oral * 8 / 30;
    disc = disc * 7 / 21;
    summary = summary * 10 / 36; 
    prog = prog * 5 / 4;

    const totalScore = Math.ceil(essay1 + essay2 + final + oral + disc + summary + prog);

    Object.keys(gradeKey).forEach(letterGrade => {
        
        if (totalScore >= gradeKey[letterGrade]){
            document.getElementById("results").innerText = "Your letter grade is " + letterGrade;
        }
    });
}