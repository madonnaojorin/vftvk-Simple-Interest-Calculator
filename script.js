function compute() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var year = parseInt(document.getElementById("year").value);
    var interest = principal * year * rate / 100;
    var yearInTheFuture = new Date().getFullYear() + year;
    //Create the Interest text
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br> " +
        "in the year <mark>" + yearInTheFuture + "</mark>";
}


function validateAmount(){
    var principal = document.getElementById("principal").value;    
    var input = document.getElementById("principal");

    if (principal <0) {
        alert("Enter a positive number.");
        document.getElementById("principal").focus();
    }
}

function validateNotBlank(){
    var input = document.getElementById("principal");

    if (input.value.length == Null){
        alert("Please enter the amount.");
        document.getElementById("principal").focus();
    }
}



