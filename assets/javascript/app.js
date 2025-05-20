let prevScrollpos = window.pageYOffset;
const bodyEl = document.querySelector("body");
const mobilMenuBtnEl = document.querySelector(".mobil-menu");
const mobilNavEl = document.querySelector(".mobil-nav");
const mobilMenuCloseEl = document.querySelector(".mobil-menu-close");

mobilMenuBtnEl.addEventListener("click", () => {
    mobilNavEl.style.transform = "translateX(0px)"
    bodyEl.style.overflow = "hidden";
})
mobilMenuCloseEl.addEventListener("click", () => {
    mobilNavEl.style.transform = "translateX(500px)"
    bodyEl.style.overflow = "visible";

})

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("header").style.top = "0";
    } else {
        document.querySelector("header").style.top = "-90px";
        document.querySelector("header").style.background = "var(--secondaryColor)";

    }
    prevScrollpos = currentScrollPos;
}



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-white";
}

