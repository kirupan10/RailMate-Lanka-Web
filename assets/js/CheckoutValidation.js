function checkoutValidation() {
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var adr = document.getElementById("adr").value;
    var city = document.getElementById("city").value;


    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;

    //card
    var cname = document.getElementById("cname").value;
    var ccnum = document.getElementById("ccnum").value;
    var expmonth = document.getElementById("expmonth").value;

    var expyear = document.getElementById("expyear").value;
    var cvv = document.getElementById("cvv").value;

    let errorShow = "";
    let PassValue = 0;
    let PassValue1 = 0;


    if (fname != "" && email != "" && adr != "" && city != "" && state != "" && zip != "") {
        errorShow += "Must fill the bulling address...!!";
        PassValue = 1;
        alert("Must fill Billing address.");
    }
    if (cname != "" && ccnum != "" && expmonth != "") {
        errorShow += "Must fill the all card details...!!";
        PassValue1 = 1;
        alert("Must fill Credit card details.");
    }

    if (PassValue == 1 && PassValue1 == 0) {
        location.href = "ViewReservation.html";
    }

    document.getElementById("errorShow").innerHTML = errorShow;
}