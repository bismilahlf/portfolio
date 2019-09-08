var links = [...document.getElementsByClassName("js-hover")];
var imgs = [...document.getElementsByTagName("img")];

function onHover(e) {
  e.preventDefault();
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].dataset.project === e.currentTarget.dataset.project)
      imgs[i].style.opacity = 1;
    else imgs[i].style.opacity = 0;
  }
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", onHover);
}
