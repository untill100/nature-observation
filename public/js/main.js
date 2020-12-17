const arrFront = [];
const arrRight = [];
const arrBack = [];
const arrLeft = [];
const arrTop = [];
const arrBottom = [];

const arrdFront = [];
const arrdRight = [];
const arrdBack = [];
const arrdLeft = [];
const arrdTop = [];
const arrdBottom = [];

let toggleFront = true, toggleRight = toggleBack = toggleLeft = toggleTop = toggleBottom = false;

window.onload = resizeWrapper();
window.addEventListener("resize", function () {
    resizeWrapper();
});

function resizeWrapper() {
    if (window.innerWidth <= 768) {
        const wrapperChild = document.querySelectorAll(".wrapper-child");
        for (let i = 0; i < wrapperChild.length; i++) {
            wrapperChild[i].style.height = window.innerHeight / 2 + "px";
        }
    } else {
        const wrapperChild = document.querySelectorAll(".wrapper-child");
        for (let i = 0; i < wrapperChild.length; i++) {
            wrapperChild[i].style.height = window.innerHeight + "px";
        }
    }
}