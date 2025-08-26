// Build a grading system that calculates grades not only from marks but also
//  from attendance percentage and gives warnings for low attendance.
let marks = Number(prompt("Enter your marks"));
let attendance = Number(prompt("Enter your attendance percentage"));
let grades;

// Marks validation
if (marks > 100 || marks < 0) {
    console.log("Invalid marks! Please enter between 0 - 100.");
}
// Attendance validation
else if (attendance > 100 || attendance < 0) {
    console.log("Invalid attendance! Please enter between 0 - 100.");
}
else {
    // Marks-based grade
    if (marks >= 90) grades = "A";
    else if (marks >= 80) grades = "B";
    else if (marks >= 70) grades = "C";
    else if (marks >= 60) grades = "D";
    else if (marks >= 50) grades = "E";
    else grades = "F";

    // Attendance adjustment
    // Very Low:Below to 50%
    if (attendance < 50) {
        console.log("Warning: Very low attendance");
        if (grades === "A") grades = "C";
        else if (grades === "B") grades = "D";
        else if (grades === "C") grades = "E";
        else grades = "F";
    }
    // Attendance below to 75%
    // Low Attendance
    else if (attendance < 75) {
        console.log("Warning: Low attendance");
        if (grades === "A") grades = "B";
        else if (grades === "B") grades = "C";
        else if (grades === "C") grades = "D";
        else if (grades === "D") grades = "E";
        else grades = "F";
    }
    // Final Grades
    console.log("Final Grade is: " + grades);
 
}
