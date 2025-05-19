let prevScrollpos = window.pageYOffset;
const mobilMenuBtnEl = document.querySelector(".mobil-menu");
const mobilNavEl = document.querySelector(".mobil-nav");
const mobilMenuCloseEl = document.querySelector(".mobil-menu-close");

mobilMenuBtnEl.addEventListener("click", () => {
    mobilNavEl.style.transform = "translateX(0px)"
})
mobilMenuCloseEl.addEventListener("click", () => {
    mobilNavEl.style.transform = "translateX(500px)"
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