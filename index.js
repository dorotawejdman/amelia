// Navigation indicator change
let navLinks = document.getElementsByClassName("nav-menu__link");

function subpageSelected(subpage) {
  window.sessionStorage.setItem("activeLink", subpage);
  onMenuClick();
}

function setActiveLink(linkId) {
  Array.prototype.forEach.call(navLinks, (link) =>
    link.classList.remove("active")
  );
  navLinks[linkId].classList.add("active");
}

window.onload = function () {
  let activeLink = window.sessionStorage.getItem("activeLink");
  setActiveLink(activeLink);
};

function submit() {
  return false;
}
// Burger menu opening
function onMenuClick() {
  document.querySelector(".nav__menu").classList.toggle("dropdown-open");
}
