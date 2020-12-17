const cubeGroup = [];
const cubeCtxGroup = [];

class createCube {
    constructor() {
        this.className = ["cube__face--front", "cube__face--right", "cube__face--back", "cube__face--left", "cube__face--top", "cube__face--bottom"];
        this.scene = document.createElement("div");
        this.cube = document.createElement("div");

        this.scene.classList.add("scene");
        this.cube.classList.add("cube");

        const parent = document.querySelector("#input");

        if (parent !== undefined && parent !== null) {
            parent.appendChild(this.scene);
        } else {
            document.body.appendChild(this.scene);
        }

        this.scene.appendChild(this.cube);

        for (let i = 0; i < 6; i++) {
            this.createCanvas(this.className[i]);
        }
    }

    createCanvas(className) {
        const canvas = document.createElement("canvas");

        if (cubeGroup.length !== 0) {
            canvas.setAttribute("id", `canvas${cubeGroup.length}`);
        } else {
            canvas.setAttribute("id", "canvas0");
        }

        canvas.classList.add("cube__face");
        canvas.classList.add(className);

        cubeGroup.push(canvas);
        this.cube.appendChild(canvas);
    }
}

new createCube;


loadAndResize();

// resize
window.addEventListener("resize", function (e) {
    loadAndResize();
});

function loadAndResize() {
    for (let i = 0; i < cubeGroup.length; i++) {
        const eachCanvas = cubeGroup[i];
        const eachCtx = eachCanvas.getContext("2d");

        cubeCtxGroup[i] = eachCtx;

        const img = new Image;

        eachCanvas.width = window.innerWidth / 2;
        eachCanvas.height = window.innerWidth / 2;

        img.onload = () => {
            eachCtx.drawImage(img, 0, 0, window.innerWidth / 2, window.innerWidth / 2);
        }

        img.src = `assets/images/${i + 1}.png`;
    }
}