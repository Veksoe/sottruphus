let prevScrollpos = window.pageYOffset;
const bodyEl = document.querySelector("body");
const mobilMenuBtnEl = document.querySelector(".mobil-menu");
const mobilNavEl = document.querySelector(".mobil-nav");
const mobilMenuCloseEl = document.querySelector(".mobil-menu-close");
const valuesContainerEl = document.querySelector(".values");
const appartmentEl = document.querySelector(".slideshow-container ")
const prevImgBtnEL = document.querySelector(".appartment .prev")
const nextImgBtnEL = document.querySelector(".appartment .next")

let sliderIndex = 1;


mobilMenuBtnEl.addEventListener("click", () => {
    mobilNavEl.style.transform = "translateX(0px)"
    bodyEl.style.overflow = "hidden";
    if (valuesContainerEl) { valuesContainerEl.style.zIndex = "-1"; }
    if (appartmentEl) { appartmentEl.style.zIndex = "-1"; }
})
mobilMenuCloseEl.addEventListener("click", () => {
    mobilNavEl.style.transform = "translateX(500px)"
    bodyEl.style.overflow = "visible";
    setTimeout(() => {
        if (valuesContainerEl) { valuesContainerEl.style.zIndex = "1"; }
        if (appartmentEl) { appartmentEl.style.zIndex = "1"; }
    }, 3000)


})
if (appartmentEl) {
    prevImgBtnEL.addEventListener("click", () => {
        plusSlider(-1);
    })

    nextImgBtnEL.addEventListener("click", () => {
        plusSlider(1);
    })
    //Manual Slide
    setSlider();
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("header").style.top = "0";
    } else {
        document.querySelector("header").style.top = "-90px";

    }
    prevScrollpos = currentScrollPos;
}



function setSlider() {
    showSliders(sliderIndex);
}

//slider image index
function plusSlider(n) {
    showSliders(sliderIndex += n);
}

//dot index
function currentSlider(n) {
    showSliders(sliderIndex = n);
}


function showSliders(n) {
    let i;
    const slides = document.querySelectorAll(".appartment .manual-slider");
    const dots = document.querySelectorAll(".appartment .dot");
    if (n > slides.length) { sliderIndex = 1 }
    if (n < 1) { sliderIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[sliderIndex - 1].style.display = "block";
    dots[sliderIndex - 1].className += " active";
}


const closeMenuModalBtnEl = document.querySelector("header .modal-close")
const openLoginEl = document.querySelector(".login-btn")
const loginModalEl = document.querySelector("dialog")
const closeMethodModalBtnEl = document.querySelector(".metode-dialog .modal-close")

openLoginEl.addEventListener('click', () => {
    loginModalEl.showModal();
})

closeMenuModalBtnEl.addEventListener('click', () => {
    closeMenuModalBtnEl.closest('dialog').close();
})


// Dialog boks - metoder 
//Åbn dialogen ved at lytte til click på kortet. 
// Fanger data-dialog værdien og sammenligner den med dialogens data-id. Hvis de matcher, åbnes den tilhørende dialogboks 
document.querySelectorAll('.metoder').forEach(kort => {
    kort.addEventListener('click', () => {
        const targetId = kort.dataset.dialog;
        const dialog = document.querySelector(`.metode-dialog[data-id="${targetId}"]`);
        if (dialog) {
            dialog.showModal();
            bodyEl.style.overflow = "hidden";

        }
    });
});

// Luk dialogen, når der klikkes på lukkeknappen
document.querySelectorAll('.metode-dialog .modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('dialog').close();
        bodyEl.style.overflow = "visible";

    });
});
