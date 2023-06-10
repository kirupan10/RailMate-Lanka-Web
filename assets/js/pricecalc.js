function validateForm() {
    var cost = 0;
    let x = document.forms["myForm"]["seatno"].value;
    if (x == "") {
        var toWhere = document.getElementById("FromWhere").value;
        var toFrom = document.getElementById("ToWhere").value;
        var classTrain = document.getElementById("class").value;

        if (toWhere == toFrom) {
            alert("Starting place and ending places can't be same \nChange Start and End locations...");
            return;
        }

        //alert("Seat number field must be filled out");
        let seatno = prompt("You must enter seats.\nPlease enter the number of seats:", "1");
        if (seatno <= 0) {
            alert("Use positive numbers...");
            return;
        }
        if (seatno >= 5) {
            alert("Maximum 5 seats...");
            return;
        }

        if (seatno == null || seatno == "") {
            window.open("index.html", "Thanks for Visiting!");
        } else {

            if (toWhere != "" && toFrom != "" && classTrain == "FirstClass") {
                cost = 2880 * seatno;
            }
            if (toWhere != "" && toFrom != "" && classTrain == "SecondClass") {
                cost = 1400 * seatno;
            }
            if (toWhere != "" && toFrom != "" && classTrain == "ThirdClass") {
                cost = 560 * seatno;
            }
            if (window.confirm("From: " + toWhere + " \nTo: " + toFrom + "\nTrain: Yazh Devi" + "\nSeat No: " + seatno + "\nTicket cost: " + cost + ".00" + "\nClass: " + classTrain + "\n\n" + "Do you want to reserve seats?")) {
                window.open("SelectTrain.html", "Reservation");
            } else {
                window.open("index.html");
            }
        }

    } else {
        var toWhere = document.getElementById("FromWhere").value;
        var toFrom = document.getElementById("ToWhere").value;
        var classTrain = document.getElementById("class").value;
        var seatno = document.getElementById("seatno").value;

        if (toWhere == toFrom) {
            alert("Starting place and ending places can't be same \nChange Start and End locations...");
            return;
        }

        if (seatno <= 0) {
            alert("Use positive numbers...");
            return;
        }
        if (seatno >= 5) {
            alert("Maximum 5 seats...");
            return;
        }

        if (toWhere != "" && toFrom != "" && classTrain == "FirstClass") {
            cost = 2880 * seatno;
        }
        if (toWhere != "" && toFrom != "" && classTrain == "SecondClass") {
            cost = 1400 * seatno;
        }
        if (toWhere != "" && toFrom != "" && classTrain == "ThirdClass") {
            cost = 560 * seatno;
        }
        if (window.confirm("From: " + toWhere + " \nTo: " + toFrom + "\nTrain: Yazh Devi" + "\nSeat No: " + seatno + "\nTicket cost: " + cost + ".00" + "\nClass: " + classTrain + "\n\n" + "Do you want to reserve seats?")) {
            window.open("SelectTrain.html", "Reservation");
        } else {
            window.open("index.html");
        }
    }
}