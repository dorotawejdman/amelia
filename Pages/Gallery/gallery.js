let imagesPerFolder = {
  Groszkowy: 8,
  Niebieski: 8,
  Zolty: 8,
  Motylkowy: 8,
  Zloggia: 7,
  Rzymski: 8,
  Wschodni: 8,
  Zachodni: 11,
  Poludniowy: 9,
  Otoczenie: 7,
  Budynek: 15,
  Widoki: 7,
};

Object.keys(imagesPerFolder).forEach((folder, idKey) => {
  console.log("." + folder);
  let containerElement = document.querySelector("#" + folder);
  for (var i = 2; i <= imagesPerFolder[folder]; i++) {
    var src = "./Assets/Images/Galeria/" + folder + "/" + i + ".JPG";
    let link = document.createElement("a");
    link.setAttribute("href", src);
    link.classList.add("lightbox" + (idKey + 1));
    var img = new Image();
    img.src = src;
    img.height = 500;
    img.classList.add("d-none");
    link.appendChild(img);
    containerElement.appendChild(link);
  }
});
