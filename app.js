// Get the data from each element on the form.
const gName = document.getElementById("txtName");
const number = document.getElementById("txtNum");
const email = document.getElementById("txtEmail");
const guestNum = document.getElementById("guestNum");
const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");
const msg = document.getElementById("msg");
const pinContainer = document.getElementById("pinContainer");
let pin = Math.floor(Math.random() * 1000000);

getPinCode();

function getPinCode() {
  pinContainer.value = pin;
}

let getFile = () => {
  getFileAsTxt();
};

const getFileAsTxt = () => {
  console.log(pin);
  // This variable stores all the data.
  let data =
    " \r\n " +
    pin +
    " \r\n " +
    "Name:" +
    gName.value +
    " \r\n " +
    "Age: " +
    number.value +
    " \r\n " +
    "Email: " +
    email.value +
    " \r\n " +
    "Number of Guests: " +
    guestNum.value +
    " \r\n " +
    "Check-In Date: " +
    startDate.value +
    " \r\n " +
    "Check-Out Date: " +
    endDate.value +
    " \r\n " +
    "Message: " +
    msg.value;
  console.log(data); //printing form data into the console
  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: "text/plain" });
  var filename = new Date();
  var month = new Date(); //months from 1-12
  month = month.getMonth();

  var day = new Date();
  var day = day.getUTCDate();

  var year = new Date();
  var year = year.getUTCFullYear();

  newdate = year + "/" + month + "/" + day;
  const sFileName = "pincode.txt"; // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();
};

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
