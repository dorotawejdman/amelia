let imagesPerFolder = {
  Groszkowy: 3,
  Niebieski: 3,
  Zolty: 3,
  Motylkowy: 3,
  Zloggia: 3,
  Rzymski: 3,
  Wschodni: 3,
  Zachodni: 3,
  Poludniowy: 3,
  Widoki: 0,
  Otoczenie: 2,
  Budynek: 5,
};

Object.keys(imagesPerFolder).forEach((folder, idKey) => {
  console.log("." + folder);
  let containerElement = document.querySelector("#" + folder);
  for (var i = 1; i <= imagesPerFolder[folder]; i++) {
    var src = "./Assets/Images/Galeria/" + folder + "/" + (i) + ".jpg";
    let link=document.createElement('a');
    link.setAttribute('href', src)
    link.classList.add('lightbox'+(idKey+1))
    var img = new Image();
    img.src = src;
    img.height = 500;
    img.classList.add('d-none');
    link.appendChild(img)
    containerElement.appendChild(link);
  }
});
