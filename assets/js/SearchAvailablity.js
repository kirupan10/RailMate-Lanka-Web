document.getElementById("Reserve").onclick = function () {

    let FromWhere = document.getElementById("FromWhere").value;
    let ToWhere = document.getElementById("ToWhere").value;
    let seatno = document.getElementById("seatno").value;
    let classTrain = document.getElementById("class").value;
    let errorShow = "";
    let cost = 0;

    // (C2) ERROR!
    if (FromWhere != "" && ToWhere != "" && seatno != "" && classTrain != "") {
        if (seatno <= 0) {
            errorShow += "Seat number must positive numbers.!<br>";
        }

        if (seatno >= 5) {
            errorShow += "Maximum 5 seats...!<br>";
        }
        if (ToWhere == FromWhere) {
            errorShow += "Starting place and ending places can't be same \nChange Start and End locations...<br>";
        }

        if (seatno >= 0 && seatno <= 5 && ToWhere != FromWhere) {
            location.href = "SelectTrain.html";
        }

    } else {
        errorShow += "Must fill all the field in this form.!";

    }
    document.getElementById("errorShow").innerHTML = errorShow;
};