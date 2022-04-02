// Dynamic nav classes change on scroll
// Get DOM elements in nav
nav = document.getElementsByTagName("nav");
nav_links = document.getElementsByClassName("nav-menu__link");
nav_header = document.getElementsByClassName("nav__header");

//Add events when to update nav classes
document.addEventListener("scroll", updateNavClasses);
window.addEventListener("load", updateNavClasses);

function updateNavClasses(e) {
  var y = window.scrollY;
  var height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  if (y > 0.85 * height) {
    nav[0].classList.add("nav-solid");
    nav_header[0].classList.add("nav-solid__header");
    for (let nav_link of nav_links) {
      nav_link.classList.add("nav-solid__link");
    }
  }

  if (y < 0.85 * height) {
    nav[0].classList.remove("nav-solid");
    nav_header[0].classList.remove("nav-solid__header");
    for (let nav_link of nav_links) {
      nav_link.classList.remove("nav-solid__link");
    }
  }
}

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
    else if (roomsTopDistance > -roomsHeightDistance && roomsTopDistance < 10) {
      setActiveLink(1);
    } else setActiveLink(0);
  },
  false
);

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
