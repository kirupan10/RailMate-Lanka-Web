<!DOCTYPE html>
<html lang="en">

<!DOCTYPE html>
<html lang="en">

<?php
// Database connection information
$host = "localhost"; // Replace with your MySQL server's hostname
$username = "root"; // Replace with your MySQL username
$password = "root"; // Replace with your MySQL password
$database = "train_reservation_system"; // Replace with the name of your database

// Create a connection to the database
$mysqli = new mysqli($host, $username, $password, $database);

// Check the connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

if (!empty($_POST["FullNameReservation"])) {
    // Reservation data
    $fullname = $_POST['FullNameReservation'];
    $nic = $_POST['PhoneNumberReservation'];
    $address = $_POST['AddressReservation'];
    $phone = $_POST['NICReservation'];
    $seatNumber = rand(0, 16); // Generate a random number
    $date = "2023-11-04";
    // Add more reservation fields as needed

    // SQL query to insert reservation data into the database
    $sql = "INSERT INTO reservations (full_name, nic_number, address, phone_number, seat_number, reservation_date) VALUES (?, ?, ?, ?, ?, ?)";

    // Prepare the statement
    $stmt = $mysqli->prepare($sql);

    if ($stmt) {
        // Bind parameters
        $stmt->bind_param("ssssis", $fullname, $nic, $address, $phone, $seatNumber, $date);

        // Execute the query
        if ($stmt->execute()) {
            echo "Reservation successfully added.";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close the statement
        $stmt->close();
    } else {
        echo "Error: " . $mysqli->error;
    }
} else {  
    echo "Form data is not set.";
}

// Close the database connection
$mysqli->close();
?>




<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Linking-External-Style_sheets-->
    <link rel="stylesheet" href="assets/style/style.css" />
    <link rel="stylesheet" href="assets/style/notification.css" />
    <link rel="stylesheet" href="assets/style/slider.css" />
    <link rel="stylesheet" href="assets/style/notify_bar.css">
    <link rel="stylesheet" href="assets/style/image.css">
    <link rel="stylesheet" href="assets/style/footer.css">
    <link rel="stylesheet" href="assets/style/news_img_shadow.css">
    <link rel="stylesheet" href="assets/style/seat-reserve.css">
    <link rel="stylesheet" href="assets/style/pricecalc.css">
    <!-- Title-Image-->
    <title>TrailMate - Seat Reservation</title>
    <link rel="icon" type="images/x-icon" href="assets/img/logo.png" />
</head>

<body>
    <!-- Notification-bar-Application-->
    <div class="alert">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
        <strong>Hey!</strong> We are now available on <a href="https://www.apple.com/app-store/">iOS </a> & <a
            href="https://play.google.com/">Android</a> platforms.
    </div>

    <!-- Menu-bar -->
    <div>
        <nav class="navbar">
            <div class="logo">
                <a href="index.html"><img src="assets/img/logo.png" alt=""> RailMate Lanka</a>
            </div>
            <!-- NAVIGATION MENU -->
            <ul class="nav-links">
                <div class="menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="Reservation.html">Reservation</a> </li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </div>
            </ul>
        </nav>
    </div>

    <!-- Notification-bar-->
    <div class="notification-top-bar">
        <p>Already have an account?
            <small>
                <a href="login.html">Login</a>
                <a href="register.html">Register</a>
            </small>
        </p>
    </div>

    <!-- Seat-Reservation-->
    <div class="header" id="myHeader">
        <div class="image-gallery">
            <img src="assets/img/conditionslogo.png" alt="Nature" width="240" height="240">
            <h2>RailMate Lanka - Trains Availability</h2>
            <br>
            <br>

            <form action="" method="post"> 

            <table style="width: 80%;" class="center">
                <tr>
                    <th>Name</th>
                    <td> <input type="text" name="FullNameReservation" id="FullNameReservation" required></td>
                </tr>

                <tr>
                    <th>Phone Number</th>
                    <td> <input type="tel" name="PhoneNumberReservation" id="PhoneNumberReservation" required></td>
                </tr>

                <tr>
                    <th>Address</th>
                    <td><input type="text" name="AddressReservation" id="AddressReservation" required></td>
                </tr>

                <tr>
                    <th>NIC Number</th>
                    <td><input type="text" name="NICReservation" id="NICReservation" required></td>
                </tr>


                </tr>


                <tr>
                    <td style="text-align: center; color: red;" colspan="2" id="errorShow"></td>
                </tr>


            </table>
        </div>
    </div>
    </div>
    </div>

    <center>
        <!-- (A) SEAT LAYOUT -->
        <div id="layout"></div>

        <!-- (B) LEGEND -->
        <div id="legend">
            <div class="seat"></div>
            <div class="txt">Available</div>
            <div class="seat taken"></div>
            <div class="txt">Taken</div>
            <div class="seat selected"></div>
            <div class="txt">Your Chosen Seats</div>
        </div>

        <!-- (C) SAVE SELECTION -->
        <button id="save" onclick="reserve.save()">Reserve Seats</button>
        <br><br>
    </center>

</form>


    <!--footer-->
    <footer>
        <div class="content">
            <div class="left box">
                <div class="upper">
                    <div class="topic">
                        <a href="index.html"><img src="assets/img/logo.png" alt=""> RailMate Lanka </a>
                    </div>
                    <p>Train booking systems are automated systems that allow customers to securely purchase tickets for
                        a variety of train services online. </p>
                </div>
                <div class="lower">
                    <div class="topic">Need a help ? </div>
                    <div class="phone">
                        <a href="#"><i class="fas fa-phone-volume"></i>+94 21 221 1046</a>
                    </div>
                    <div class="email">
                        <a href="#"><i class="fas fa-envelope"></i>RailMateLanka@Outlook.com</a>
                    </div>
                </div>
            </div>
            <div class="middle box">
                <div class="topic">Our Services</div>
                <div><a href="Reservation.html">Online Train Reservation</a></div>
                <div><a href="pricing.html">Price Calculation</a></div>
                <div><a href="conditions.html">Terms & Conditions</a></div>
                <div><a href="NewsUpdate.html">News & Updates</a></div>
                <div><a href="faq.html">FAQ</a></div>
                <div><a href="profile.html">Dashboard</a></div>
                <div><a href="trains.html">Trains List</a></div>

            </div>
            <div class="right box">
                <div class="topic">Subscribe us</div>
                <form action="">
                    <input type="text" placeholder="Enter email address">
                    <input type="submit" name="" value="Send">
                </form>
            </div>
        </div>
        <div class="bottom">
            <p>Copyright &#169; 2023 <a href="index.html">RailMate Lanka</a> All rights reserved</p>
        </div>
    </footer>
</body>

<!--Java-script-files-->
<script type="text/javascript" src="assets/js/slider.js"> </script>
<script type="text/javascript" src="assets/js/image_grid.js"> </script>
<script type="text/javascript" src="assets/js/pricecalc.js"> </script>
<script type="text/javascript" src="assets/js/counter.js"></script>
<script type="text/javascript" src="assets/js/seat-reserve.js"></script>

</html>