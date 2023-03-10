function validateRegisterForm() {
    // Get form values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("cnfmpassword").value;
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var date = document.getElementById("username").value;
    var gender = document.getElementById("gender").value;
    

    if (username == "" || password == "" || confirmPassword == "" || firstName == "" || lastName == "" || date == "" || gender == "") {
        alert("All fields are required");
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }

    if (password != confirmPassword) {
        alert("Passwords do not match");
        return false;
    }
}


