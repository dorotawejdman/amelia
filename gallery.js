let imagesPerFolder = {
  Budynek: 6,
  Widoki: 4,
  Otoczenie: 6,
};

Object.keys(imagesPerFolder).forEach((folder) => {
  console.log("." + folder);
  let containerElement = document.querySelector("." + folder);
  for (var i = 1; i <= imagesPerFolder[folder]; i++) {
    var src = "./Assets/Images/Galeria/" + folder + "/" + (i + 1) + ".jpg";
    var img = new Image();
    img.src = src;
    img.height = 500;

    containerElement.appendChild(img);
  }
});
