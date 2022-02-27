let activeSubpages = {
  contact: false,
  rooms: false,
  main: true,
};

// Navigation indicator change
let navLinks = document.getElementsByClassName("nav-menu__link");
function subpageSelected(subpage) {
  Array.prototype.forEach.call(navLinks, (link) =>
    link.classList.remove("active")
  );
  navLinks[subpage].classList.add("active");
  console.log(activeSubpages);
}
