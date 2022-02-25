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
