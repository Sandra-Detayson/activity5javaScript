function displayName(name = null) {
    return name;
}

function computeTwoNumbers(num1, num2) {
    return num1 + num2;
}

function confirmSubmission() {
    if (confirm("Do you really want to submit?")) {
        alert(computeTwoNumbers(12, 3));
    }
}

function ComputeGrade(){
    let name = prompt("Enter your name");
    var totalItems = parseInt(prompt("Enter Total Items: "));
    var totalScore = parseInt(prompt("Enter Total Score: "));
    var result = formula(totalItems, totalScore).toFixed(2);
    alert( `Your Name Is: ${name} \nYour Score is: ${ result} \nResult: ${ checkResult(result)}`);
    console.log("Your name is: "+ name + "\n"+ "your score is: "+ result + "\n"+ "Result: "+ checkResult(result));

    //for output at the web page
    document.write("<br>");
    document.write("<br>");
    document.write("Your name is: "+ name+"<br>Your score is: "+ result + "<br>Result: "+ checkResult(result));
    
}

function formula(totalItems, totalScore) {
    return -4 * (totalScore / totalItems) + 5;
}

function checkResult(result){
    if (result > 3.0) {
        return "You failed";
    } else {
        return "You passed";
    }
}

