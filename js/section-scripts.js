var sections = [...document.getElementsByClassName("content")];
var asideSections = [...document.getElementsByClassName("asideSection")];

var scrollTopOffset = window.innerHeight * 0.7;
var currentSection = -1;
function onScroll() {
  var currentScroll =
    -scrollTopOffset +
    (document.body.scrollTop || document.documentElement.scrollTop);

  var section = Math.floor(
    (currentScroll + window.innerHeight / 2) / window.innerHeight
  );

  if (section !== currentSection) {
    for (let i = 0; i < sections.length; i++) {
      if (i === section) {
        sections[i].style.opacity = 1;
        asideSections[i].style.opacity = 1;
      } else {
        sections[i].style.opacity = 0.4;
        asideSections[i].style.opacity = 0;
      }
    }
    currentSection = section;
  }
}

var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, "passive", {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e) {}

window.addEventListener(
  "scroll",
  onScroll,
  supportsPassive ? { passive: true } : false
);

onScroll();
