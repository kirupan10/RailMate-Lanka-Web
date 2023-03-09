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
            if (toWhere == "jaffna" && toFrom == "colombo") {
                cost = 450.00 * seatno;
            }
            if (window.confirm("From: " + toWhere + " \nTo: " + toFrom + "\nTrain: Yazh Devi" + "\nSeat No: " + seatno + "\nTicket cost: " + cost + ".00\n\n" + "Do you want to reserve seats?")) {
                window.open("seat_reservation.html", "Thanks for Visiting!");
            } else {
                window.open("index.html", "Thanks for Visiting!");
            }
        }

    } else {
        var toWhere = document.getElementById("FromWhere").value;
        var toFrom = document.getElementById("ToWhere").value;
        var seatno = document.getElementById("seatno").value;

        if (toWhere == "jaffna" && toFrom == "colombo") {
            cost = 450.00 * seatno;
        }
        if (window.confirm("From: " + toWhere + " \nTo: " + toFrom + "\nTrain: Yazh Devi" + "\nSeat No: " + seatno + "\nTicket cost: " + cost + ".00\n\n" + "Do you want to reserve seats?")) {
            window.open("exit.html", "Thanks for Visiting!");
        } else {
            window.open("index.html", "Thanks for Visiting!");
        }
    }
}