function calculateFinal(){
    const gradeKey = { "D":50, "D+":55, "C-":60, "C":65, "C+":70, "B-":75, "B":80, "B+":85, "A-":90, "A":95 };

    let library = document.getElementById("library").value;
    let essay = document.getElementById("essay").value;
    let oral = document.getElementById("oral").value;
    let outline = document.getElementById("outline").value;
    let rp = document.getElementById("rp").value;
    let interview = document.getElementById("interview").value;

    library = library * 5 / 10;
    essay = essay * 20 / 22;
    oral = oral * 20 / 24;
    outline = outline * 10 / 15;
    interview = interview * 15 / 60;
    rp = rp * 30 / 100;

    const totalScore = Math.ceil(library + essay + oral + outline + rp + interview);

    Object.keys(gradeKey).forEach(letterGrade => {
        
        if (totalScore >= gradeKey[letterGrade]){
            document.getElementById("results").innerText = "Your letter grade is " + letterGrade;
        }
    });
}
