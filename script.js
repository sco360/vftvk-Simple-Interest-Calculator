function compute() { // Function for computing the interest
    // Gather the various inputs from the form and place them into variables 
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //Calculate the interest received based on the user input
    var interest = principal * years * (rate / 100);
    //Display the date that the interest will be paid out by adding the number of years to the current year
    var year = new Date().getFullYear() + parseInt(years);

    // If the user enters a negative number or a 0 into the "principal" input, 
    //throw an alert directing them to enter a positive number and set their focus to the "principal" input
    if (principal <= 0) {
        alert("Please enter a positive number.");
        document.getElementById("principal").focus();
    } else {
        //If principal is a positive number, then display the results by setting the inner HTML of the span "result"
        var result = document.getElementById("result")
        result.innerHTML = "If you deposit <span id='result_nums'>" + principal + "</span><br>" +
            "at an interest rate of <span id='result_nums'>" + rate + "%</span><br>" +
            "you will receive an amount of <span id='result_nums'>" + interest.toFixed("2") + "</span><br>" +
            "in the year <span id='result_nums'>" + year + "</span><br>"
    }
}

function updateRate() {
    //Update the displayed text in the span "rate_val" to reflect the new value when the user slides the rate slider
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%"
}