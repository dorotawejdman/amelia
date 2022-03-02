let imagesPerFolder = {
  Budynek: 5,
  Widoki: 0,
  Otoczenie: 2,
};

Object.keys(imagesPerFolder).forEach((folder, idKey) => {
  console.log("." + folder);
  let containerElement = document.querySelector("." + folder);
  for (var i = 1; i <= imagesPerFolder[folder]; i++) {
    var src = "./Assets/Images/Galeria/" + folder + "/" + (i + 1) + ".jpg";
    let link=document.createElement('a');
    link.setAttribute('href', src)
    link.classList.add('lightbox'+idKey)
    link.classList.add('d-none')
    var img = new Image();
    img.src = src;
    img.height = 500;
    link.appendChild(img)
    containerElement.appendChild(link);
  }
});
