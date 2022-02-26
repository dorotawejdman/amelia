// Dynamic nav classes change on scroll
nav = document.getElementsByTagName("nav");
document.addEventListener("scroll", function (e) {
  var y = window.scrollY;
  var height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  if (y > 0.85 * height) {
    nav[0].classList.add("nav-transparent");
  }
  if (y < 0.85 * height) {
    nav[0].classList.remove("nav-transparent");
  }
});

// Form change listener
window.addEventListener("load", function () {
  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let message = e.target.elements.message.value;
    let departureDate = e.target.elements.departureDate.value;
    let arrivalDate = e.target.elements.arrivalDate.value;
    let adultsNumber = e.target.elements.adultsNumber.value;
    let kidsNumber = e.target.elements.kidsNumber.value;
    let animalsNumber = e.target.elements.animalsNumber.value;
    let emailContent = `Wiadomość od ${email}\nTreść:\n${message}\n`;
    let additionalContent = `Data przyjazdu:  ${arrivalDate}\nData wyjazdu:  ${departureDate}\nLiczba dorosłych:  ${adultsNumber}\nLiczba dzieci:  ${kidsNumber}\nLiczba zwierząt:  ${animalsNumber}`;
    console.log(emailContent);
    if (
      arrivalDate ||
      departureDate ||
      adultsNumber ||
      kidsNumber ||
      animalsNumber
    ) {
      console.log(emailContent + additionalContent);
    }
  });
});
