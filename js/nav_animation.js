var lastKnownScrollPosition = 0;
var ticking = false;

const navMenuHeight = "35%";
const scrollThreshold = 400;
const mouseThreshold = 130;

var navMenu = document.getElementById("navMenu");

var logoImage = '<img id="logoImage" src="img/logo.jpg" alt="logo capa">';
var logoText = '<h1 id="logoText">CAPA 2021</h1>';
        
var logo = document.getElementById("logoText");



function navOnScroll(scrollPos) {
  navMenu.style.transition = "height 0.6s linear 0s";

  if (scrollPos > scrollThreshold){
      navMenu.style.height = "0";
      logo.outerHTML = logoImage;
      logo = document.getElementById("logoImage");
    }

  else {
      navMenu.style.height = navMenuHeight;
      logo.outerHTML = logoText;
      logo = document.getElementById("logoText");
  }
}

function navOnHover(mouse) {
  if (lastKnownScrollPosition > scrollThreshold) {
    mouseY = mouse.y;
    navMenu.style.transition = "height 0.3s linear 0s";

    if (mouseY < mouseThreshold) navMenu.style.height = navMenuHeight;
    else navMenu.style.height = "0";
  }
}

document.addEventListener("scroll", function (e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      navOnScroll(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});

window.addEventListener("mousemove", function (e) {
  navOnHover(e);
});

