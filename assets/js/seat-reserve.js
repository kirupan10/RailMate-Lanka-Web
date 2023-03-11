let seatcounter = 0;
var reserve = {
  // (A) INIT
  init: () => {
    // (A1) GET LAYOUT WRAPPER
    let layout = document.getElementById("layout");

    // (A2) GENERATE SEATS
    for (let i = 60; i < 68; i++) {
      for (let j = 1; j <= 4; j++) {
        let seat = document.createElement("div");
        seatcounter = parseInt(seatcounter) + 1;
        seat.innerHTML = seatcounter;
        seat.className = "seat";
        seat.onclick = () => reserve.toggle(seat);
        layout.appendChild(seat);
      }
    }

    // (A3) FOR DEMO ONLY - RANDOM TAKEN SEATS
    let all = document.querySelectorAll("#layout .seat"),
      len = all.length - 1, rnd = [];
    while (rnd.length != 3) {
      let r = Math.floor(Math.random() * len);
      if (!rnd.includes(r)) { rnd.push(r); }
    }
    for (let i of rnd) {
      all[i].classList.add("taken");
      all[i].onclick = "";
    }
  },

  // (B) CHOOSE THIS SEAT
  toggle: seat => seat.classList.toggle("selected"),

  // (C) SAVE RESERVATION
  save: () => {
    // (C1) GET SELECTED SEATS
    let selected = document.querySelectorAll("#layout .selected");

    let FullNameReservation = document.getElementById("FullNameReservation").value;
    let PhoneNumberReservation = document.getElementById("PhoneNumberReservation").value;
    let AddressReservation = document.getElementById("AddressReservation").value;
    let NICReservation = document.getElementById("NICReservation").value;
    let errorShow = "";

    // (C2) ERROR!
    if (FullNameReservation != "" && PhoneNumberReservation != "" && AddressReservation != "" && NICReservation != "") {
      if (selected.length == 0) {
        errorShow += "No seats selected.!<br>";
        
      } else {
        location.href = "checkout.html";
      }

    } else {
      errorShow += "Must fill all the field in this form.!";

    }
    document.getElementById("errorShow").innerHTML = errorShow;
  }
};
window.addEventListener("DOMContentLoaded", reserve.init);