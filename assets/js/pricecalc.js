function validateForm() {
    var cost = 0;
    let x = document.forms["myForm"]["seatno"].value;
    if (x == "") {
        //alert("Seat number field must be filled out");
        let seatno = prompt("You must enter seats.\nPlease enter the number of seats:", "1");
        if (seatno == null || seatno == "") {
            window.open("index.html", "Thanks for Visiting!");
        } else {
            var toWhere = document.getElementById("FromWhere").value;
            var toFrom = document.getElementById("ToWhere").value;
            var classTrain = document.getElementById("class").value;
            if (toWhere == "jaffna" && toFrom == "colombo" && classTrain == "FirstClass") {
                cost = 2250 * seatno;
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
        var seatno = document.getElementById("seatno").value;
        var classTrain = document.getElementById("class").value;
        if (toWhere == "jaffna" && toFrom == "colombo" && classTrain == "FirstClass") {
            cost = 2250 * seatno;
        }
        if (window.confirm("From: " + toWhere + " \nTo: " + toFrom + "\nTrain: Yazh Devi" + "\nSeat No: " + seatno + "\nTicket cost: " + cost + ".00" + "\nClass: " + classTrain + "\n\n" + "Do you want to reserve seats?")) {
            window.open("SelectTrain.html", "Reservation");
        } else {
            window.open("index.html");
        }
    }
}