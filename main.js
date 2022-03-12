// Dynamic nav classes change on scroll
nav = document.getElementsByTagName("nav");
document.addEventListener("scroll", function (e) {
  var y = window.scrollY;
  var height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  if (y > 0.85 * height) {
    nav[0].classList.add("nav-solid");
  }
  if (y < 0.85 * height) {
    nav[0].classList.remove("nav-solid");
  }
});

// Navigation indicator change on scroll event
window.addEventListener(
  "scroll",
  function (event) {
    let contactTopDistance = this.document
      .getElementById("contact-section")
      .getBoundingClientRect().top;
    let roomsHeightDistance = this.document
      .getElementById("rooms-section")
      .getBoundingClientRect().height;
    let roomsTopDistance = this.document
      .getElementById("rooms-section")
      .getBoundingClientRect().top;
    if (contactTopDistance < 10) setActiveLink(4);
    else if (roomsTopDistance > -roomsHeightDistance && roomsTopDistance < 10)
      setActiveLink(1);
    else setActiveLink(0);
  },
  false
);

// Form change listener
// window.addEventListener("load", function () {
//   document.getElementById("form").addEventListener("submit", function (e) {
//     e.preventDefault();
//     let email = e.target.elements.email.value;
//     let message = e.target.elements.message.value;
//     let departureDate = e.target.elements.departureDate.value;
//     let arrivalDate = e.target.elements.arrivalDate.value;
//     let adultsNumber = e.target.elements.adultsNumber.value;
//     let kidsNumber = e.target.elements.kidsNumber.value;
//     let animalsNumber = e.target.elements.animalsNumber.value;
//     let emailContent = `Wiadomość od ${email}\nTreść:\n${message}\n`;
//     let additionalContent = `Data przyjazdu:  ${arrivalDate}\nData wyjazdu:  ${departureDate}\nLiczba dorosłych:  ${adultsNumber}\nLiczba dzieci:  ${kidsNumber}\nLiczba zwierząt:  ${animalsNumber}`;
//     console.log(emailContent);
//     if (
//       arrivalDate ||
//       departureDate ||
//       adultsNumber ||
//       kidsNumber ||
//       animalsNumber
//     ) {
//       console.log(emailContent + additionalContent);
//     }
//   });
// });

// Form details opening

let detailsOpen = false;
let formDetailsElement = document.querySelector(".form__details");
let formArrowElement = document.querySelector(".form__details__arrow");

function formDetailsClicked() {
  detailsOpen = !detailsOpen;
  formArrowElement.classList.toggle("form__details__arrow--up");
  if (detailsOpen) {
    formDetailsElement.style.display = "none";
  } else {
    formDetailsElement.style.display = "flex";
  }
}


