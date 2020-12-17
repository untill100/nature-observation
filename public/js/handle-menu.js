const toggle_menu = document.querySelector("#toggle-menu");
const menu = document.querySelector("#menu");

toggle_menu.innerHTML = `
<svg class="menu-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<defs>
    <style>
        .cls-1 {
            fill: none;
            stroke: #000;
            stroke-width: 1.5px;
        }
    </style>
</defs>
<title>menu</title>
<line class="cls-1" x1="10" x2="10" y2="20" />
<line class="cls-1" y1="10" x2="20" y2="10" />
</svg>`;

toggle_menu.addEventListener("click", function (e) {
    this.style.transform = "rotate(45deg)";
    if (menu.style.display !== "flex") {
        menu.style.display = "flex";
        setTimeout(() => {
            menu.style.opacity = 1;
        }, 250);
    } else {
        this.style.transform = "rotate(0)";
        menu.style.opacity = 0;
        setTimeout(() => {
            menu.style.display = "none";
        }, 250);
    }
});