// ----------------------------------------ScrollToTop
var mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 630 ||
    document.documentElement.scrollTop > 630
  ) {
    mybutton.style.opacity = "1";
    mybutton.style.cursor = "pointer";
    mybutton.style.pointerEvents = "auto";
  } else {
    mybutton.style.opacity = "0";
    mybutton.style.cursor = "default";
    mybutton.style.pointerEvents = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//------------------------------------Pozdrav
const texts = [
  "   ",
  "Pozdrav!   ",
  "   ",
  "Ja sam...   ",
  "   ",
  "Papić Dušan!   ",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector("#Pozdrav").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 350);
})();
// -----------------------------------Menu
const navSlide = () => {
  const MenuIcon = document.querySelector(".MenuIcon");
  const nav = document.querySelector("nav ul");
  const portfolio = document.querySelector("#PortfolioNav");
  const about = document.querySelector("#AboutNav");
  const contact = document.querySelector("#ContactNav");

  MenuIcon.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    MenuIcon.classList.toggle("toggle");
  });
  portfolio.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    MenuIcon.classList.remove("toggle");
  });
  about.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    MenuIcon.classList.remove("toggle");
  });
  contact.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    MenuIcon.classList.remove("toggle");
  });
};
navSlide();
// -----------------------------------Portfolio Overlay
// Logo Overlay
function openLogo() {
  document.getElementById("LogoOverlay").style.transform = "scale(1)";
  document.getElementById("OverlayBackground").style.display = "block";
}
function closeLogo() {
  document.getElementById("LogoOverlay").style.transform = "scale(0)";
  document.getElementById("OverlayBackground").style.display = "none";
}
// Manipulacija Overlay
function openManipulation() {
  document.getElementById("ManipulationOverlay").style.transform = "scale(1)";
  document.getElementById("OverlayBackground").style.display = "block";
}
function closeManipulation() {
  document.getElementById("ManipulationOverlay").style.transform = "scale(0)";
  document.getElementById("OverlayBackground").style.display = "none";
}
// Poster Overlay
function openPoster() {
  document.getElementById("PosterOverlay").style.transform = "scale(1)";
  document.getElementById("OverlayBackground").style.display = "block";
}
function closePoster() {
  document.getElementById("PosterOverlay").style.transform = "scale(0)";
  document.getElementById("OverlayBackground").style.display = "none";
}
// Web Overlay
function openWeb() {
  document.getElementById("WebOverlay").style.transform = "scale(1)";
  document.getElementById("OverlayBackground").style.display = "block";
}
function closeWeb() {
  document.getElementById("WebOverlay").style.transform = "scale(0)";
  document.getElementById("OverlayBackground").style.display = "none";
}
// -----------------------------------Auto Scrolling
function pageScroll() {
  window.scrollBy(0, 780);
}
function LogoScroll() {
  document.getElementById("LogoOverlay").scrollBy(0, 500);
}
function ManipulationScroll() {
  document.getElementById("ManipulationOverlay").scrollBy(0, 500);
}
function PosterScroll() {
  document.getElementById("PosterOverlay").scrollBy(0, 500);
}
// -----------------------------------Overlay Expand
// LogoExpand
function expandLogo() {
  document.getElementById("LogoPrvi").style.display = "flex";
  document.getElementById("LogoDrugi").style.display = "flex";
  document.getElementById("LogoManje").style.display = "block";
  document.getElementById("LogoVise").style.display = "none";
}
function contractLogo() {
  document.getElementById("LogoPrvi").style.display = "none";
  document.getElementById("LogoDrugi").style.display = "none";
  document.getElementById("LogoVise").style.display = "block";
  document.getElementById("LogoManje").style.display = "none";
}
// ManipulationExpand
function expandManipulation() {
  document.getElementById("ManipulationPrvi").style.display = "flex";
  document.getElementById("ManipulationDrugi").style.display = "flex";
  document.getElementById("ManipulationManje").style.display = "block";
  document.getElementById("ManipulationVise").style.display = "none";
}
function contractManipulation() {
  document.getElementById("ManipulationPrvi").style.display = "none";
  document.getElementById("ManipulationDrugi").style.display = "none";
  document.getElementById("ManipulationVise").style.display = "block";
  document.getElementById("ManipulationManje").style.display = "none";
}
// PosterExpand
function expandPoster() {
  document.getElementById("PosterPrvi").style.display = "flex";
  document.getElementById("PosterDrugi").style.display = "flex";
  document.getElementById("PosterManje").style.display = "block";
  document.getElementById("PosterVise").style.display = "none";
}
function contractPoster() {
  document.getElementById("PosterPrvi").style.display = "none";
  document.getElementById("PosterDrugi").style.display = "none";
  document.getElementById("PosterVise").style.display = "block";
  document.getElementById("PosterManje").style.display = "none";
}
// Web Expand
function expandWeb() {
  document.getElementById("PosterPrvi").style.display = "flex";
  document.getElementById("PosterDrugi").style.display = "flex";
  document.getElementById("PosterManje").style.display = "block";
  document.getElementById("PosterVise").style.display = "none";
}
function contractWeb() {
  document.getElementById("").style.display = "none";
  document.getElementById("").style.display = "none";
  document.getElementById("").style.display = "block";
  document.getElementById("").style.display = "none";
}
