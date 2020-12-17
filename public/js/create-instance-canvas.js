const instanceGroup = [];

class createInstanceCanvas {
    constructor() {
        this.elements = [];
        this.className = ["cube__face--front", "cube__face--right", "cube__face--back", "cube__face--left", "cube__face--top", "cube__face--bottom"];
        this.bgImg = null;

        for (let i = 0; i < 6; i++) {
            this.createInstance(this.className[i], this.bgImg);
        }

        window.addEventListener("resize", (e) => {
            for (let i = 0; i < instanceGroup.length; i++) {
                const canvas = instanceGroup[i].elt;
                const size = window.innerWidth / 2;

                canvas.style.width = size + "px";
                canvas.style.height = size + "px";
            }
        });
    }

    createInstance(className, bgImg) {
        const pixelSize = 50;

        const p5Element = function (p) {
            p.setup = function () {
                p.rectMode(p.CENTER);

                const canvas = p.createCanvas(window.innerWidth / 2, window.innerWidth / 2);

                if (instanceGroup.length !== 0) {
                    canvas.id(`p5Canvas${instanceGroup.length}`);
                    canvas.addClass(className);

                    bgImg = p.loadImage(`assets/images/${instanceGroup.length + 1}.png`);
                } else {
                    canvas.id(`p5Canvas0`);
                    canvas.addClass(className);

                    bgImg = p.loadImage('assets/images/1.png');
                }

                canvas.addClass("cube__face");

                instanceGroup.push(canvas);
            }

            p.windowResized = function () {
                p.resizeCanvas(window.innerWidth / 2, window.innerWidth / 2);
            }

            p.draw = function () {
                if (toggleFront && arrFront.length !== 0) {
                    const x = convertRange(arrFront[0].x, [0, 640], [0, window.innerWidth / 2]);
                    const y = convertRange(arrFront[0].y, [0, 480], [0, window.innerWidth / 2]);
                    const point = arrdFront[0].data;
                    const rgb = `rgb(${point[0]}, ${point[1]}, ${point[2]})`;

                    p.clear();
                    p.background(bgImg);
                    p.strokeWeight(1);
                    p.stroke(0);
                    p.fill(rgb);
                    p.ellipse(x, y, pixelSize, pixelSize);
                }

                if (toggleRight && arrRight.length !== 0) {
                    const x = convertRange(arrRight[0].x, [0, 640], [0, window.innerWidth / 2]);
                    const y = convertRange(arrRight[0].y, [0, 480], [0, window.innerWidth / 2]);
                    const point = arrdRight[0].data;
                    const rgb = `rgb(${point[0]}, ${point[1]}, ${point[2]})`;

                    p.clear();
                    p.background(bgImg);
                    p.strokeWeight(1);
                    p.stroke(0);
                    p.fill(rgb);
                    p.ellipse(x, y, pixelSize, pixelSize);
                }

                if (toggleBack && arrBack.length !== 0) {
                    const x = convertRange(arrBack[0].x, [0, 640], [0, window.innerWidth / 2]);
                    const y = convertRange(arrBack[0].y, [0, 480], [0, window.innerWidth / 2]);
                    const point = arrdBack[0].data;
                    const rgb = `rgb(${point[0]}, ${point[1]}, ${point[2]})`;

                    p.clear();
                    p.background(bgImg);
                    p.strokeWeight(1);
                    p.stroke(0);
                    p.fill(rgb);
                    p.ellipse(x, y, pixelSize, pixelSize);
                }

                if (toggleLeft && arrLeft.length !== 0) {
                    const x = convertRange(arrLeft[0].x, [0, 640], [0, window.innerWidth / 2]);
                    const y = convertRange(arrLeft[0].y, [0, 480], [0, window.innerWidth / 2]);
                    const point = arrdLeft[0].data;
                    const rgb = `rgb(${point[0]}, ${point[1]}, ${point[2]})`;

                    p.clear();
                    p.background(bgImg);
                    p.strokeWeight(1);
                    p.stroke(0);
                    p.fill(rgb);
                    p.ellipse(x, y, pixelSize, pixelSize);
                }

                if (toggleTop && arrTop.length !== 0) {
                    const x = convertRange(arrTop[0].x, [0, 640], [0, window.innerWidth / 2]);
                    const y = convertRange(arrTop[0].y, [0, 480], [0, window.innerWidth / 2]);
                    const point = arrdTop[0].data;
                    const rgb = `rgb(${point[0]}, ${point[1]}, ${point[2]})`;

                    p.clear();
                    p.background(bgImg);
                    p.strokeWeight(1);
                    p.stroke(0);
                    p.fill(rgb);
                    p.ellipse(x, y, pixelSize, pixelSize);
                }

                if (toggleBottom && arrBottom.length !== 0) {
                    const x = convertRange(arrBottom[0].x, [0, 640], [0, window.innerWidth / 2]);
                    const y = convertRange(arrBottom[0].y, [0, 480], [0, window.innerWidth / 2]);
                    const point = arrdBottom[0].data;
                    const rgb = `rgb(${point[0]}, ${point[1]}, ${point[2]})`;

                    p.clear();
                    p.background(bgImg);
                    p.strokeWeight(1);
                    p.stroke(0);
                    p.fill(rgb);
                    p.ellipse(x, y, pixelSize, pixelSize);
                }

            }
        }

        new p5(p5Element, document.querySelector('.cube'));
    }
}

new createInstanceCanvas;


function convertRange(value, r1, r2) {
    return (value - r1[0]) * (r2[1] - r2[0]) / (r1[1] - r1[0]) + r2[0];
}