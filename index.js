// Navigation indicator change
let navLinks = document.getElementsByClassName("nav-menu__link");

function subpageSelected(subpage) {
  window.sessionStorage.setItem('activeLink',subpage);
}

function setActiveLink(linkId) {
  Array.prototype.forEach.call(navLinks, (link) =>
  link.classList.remove("active"));
  navLinks[linkId].classList.add("active");
}
window.onload = function() {
  let activeLink = window.sessionStorage.getItem('activeLink')
  setActiveLink(activeLink)
}

window.addEventListener("scroll", function(event) {
      let contactTopDistance = this.document.getElementById('contact-section').getBoundingClientRect().top
      let contactBottom = this.document.getElementById('contact-section').getBoundingClientRect().bottom
      let roomsTopDistance = this.document.getElementById('rooms-section').getBoundingClientRect().top
    if(contactTopDistance<500) setActiveLink(4)
    else if(roomsTopDistance<500) setActiveLink(1)
    else setActiveLink(0)
}, false);