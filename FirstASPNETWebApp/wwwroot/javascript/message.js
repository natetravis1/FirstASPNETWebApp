$("#calcButton").click(function () {

    // gets input for each assignment to calculate
    let class1 = $("#class1").val();
    let class2 = $("#class2").val();
    let class3 = $("#class3").val();
    let class4 = $("#class4").val();
    let class5 = $("#class5").val();

    // create variable to store grade
    let grade = 0;

    // calculate numeric grade
    grade = ((parseFloat((class1 * 0.55).toFixed(2)) + parseFloat((class2 * 0.05).toFixed(2)) + parseFloat((class3 * 0.1).toFixed(2)) + parseFloat((class4 * 0.2).toFixed(2)) + parseFloat((class5 * 0.1).toFixed(2))).toFixed(2)).toString();

    // determines letter grade based on calculated numeric grade
    if (grade >= 94) {
        letterGrade = "A"
    } else if (grade >= 90) {
        letterGrade = "A-"
    } else if (grade >= 87) {
        letterGrade = "B+"
    } else if (grade >= 84) {
        letterGrade = "B"
    } else if (grade >= 80) {
        letterGrade = "B-"
    } else if (grade >= 77) {
        letterGrade = "C+"
    } else if (grade >= 74) {
        letterGrade = "C"
    } else if (grade >= 70) {
        letterGrade = "C-"
    } else if (grade >= 67) {
        letterGrade = "D+"
    } else if (grade >= 64) {
        letterGrade = "D"
    } else if (grade >= 60) {
        letterGrade = "D-"
    } else {
        letterGrade = "E"
    }

    // prints both numeric and letter grade back to user via alert
    alert("Your grade is  " + grade.toString() + "% (" + letterGrade + ")")
})