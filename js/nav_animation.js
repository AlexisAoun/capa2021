var lastKnownScrollPosition = 0;
var ticking = false;

var navMenuHeight = "35%";
var scrollThreshold = 400;
var mouseThreshold = 130;
var navMenu = document.getElementById("navMenu");
var isNavVisible = true;

function navOnScroll(scrollPos) {
  navMenu.style.transition = "height 0.6s linear 0s";
  if (scrollPos > scrollThreshold) {
    navMenu.style.height = "0";
    isNavVisible = false;
  } else {
    navMenu.style.height = navMenuHeight;
    isNavVisible = true;
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
