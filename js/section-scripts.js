var sections = [...document.getElementsByClassName("content")];
var asideSections = [...document.getElementsByClassName("asideSection")];

var scrollTopOffset = window.innerHeight * 0.7;
var currentSection = -1;
function onScroll() {
  var currentScroll =
    -scrollTopOffset +
    (document.body.scrollTop || document.documentElement.scrollTop);
  console.log(currentScroll);

  var section = Math.floor(
    (currentScroll + window.innerHeight / 2) / window.innerHeight
  );

  if (section !== currentSection) {
    console.log(currentSection);
    currentSection = section;
    for (let i = 0; i < sections.length; i++) {
      if (i === currentSection) {
        sections[i].style.opacity = 1;
        asideSections[i].style.opacity = 1;
      } else {
        sections[i].style.opacity = 0.4;
        asideSections[i].style.opacity = 0;
      }
    }
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
