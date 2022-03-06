for(let i=1; i<=12; i++){
  lightbox(".lightbox"+i, {
    captions: true,
    captionsSelector: "self",
    captionAttribute: "title",nav: "auto",
    navText: ["‹", "›"],
    close: true,
    closeText: "×",
    counter: true,
    keyboard: true,
    zoom: false,
    zoomText: "+",
    docClose: true,
    swipeClose: true,
    scroll: false,
  });
}

