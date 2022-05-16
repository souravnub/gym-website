const nav = document.querySelector("nav");
const close_btn = document.getElementById("close-btn");
const ham_btn = document.getElementById("hammenu-btn");
const side_bar = document.getElementById("side-bar");
const body_overlay = document.getElementById("body-overlay");

ham_btn.addEventListener("click", () => {
    side_bar.classList.add("side-bar-menu-show");
    body_overlay.classList.remove("body-overlay-hide");
    body_overlay.classList.add("body-overlay-show");
});
close_btn.addEventListener("click", () => {
    side_bar.classList.remove("side-bar-menu-show");
    body_overlay.classList.add("body-overlay-hide");
    body_overlay.classList.remove("body-overlay-show");
});

window.addEventListener("click", (e) => {
    console.log(e.target);
    if (
        side_bar.classList.contains("side-bar-menu-show") &&
        e.target.classList.contains("body-overlay-show")
    ) {
        side_bar.classList.remove("side-bar-menu-show");
        body_overlay.classList.remove("body-overlay-show");
        body_overlay.classList.add("body-overlay-hide");
    }
});

document.body.style.paddingTop = `${nav.getClientRects()[0].height}px`;

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        nav.style.boxShadow = "rgb(0 0 0) 0px 0px 20px 7px";
    } else {
        nav.style.boxShadow = "none";
    }
});

// swipers

new Swiper(".swiper", {
    direction: "horizontal",

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

new Swiper(".testimonial-swiper", {
    direction: "horizontal",

    slidesPerView: window.innerWidth <= 600 ? 1 : 2,
    spaceBetween: 10,
});

new Swiper(".blogs-swiper", {
    direction: "horizontal",

    slidesPerView:
        window.innerWidth <= 1000 ? (window.innerWidth <= 700 ? 1 : 2) : 3,
    spaceBetween: 20,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
