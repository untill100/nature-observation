const temp = [];

let toggleFill = true;
let toggleStroke = false;
let toggleInstantData = false;
let toggleRotateBox = true;
let toggleShowBox = true;

let maximumSize;

function setup() {
    if (window.innerWidth > 768) {
        const canvas = createCanvas(window.innerWidth / 2, window.innerHeight, WEBGL);
        canvas.parent("output");
    } else {
        const canvas = createCanvas(window.innerWidth, window.innerHeight / 2, WEBGL);
        canvas.parent("output");
    }
}

function draw() {
    if (window.innerWidth >= 768) {
        maximumSize = window.innerWidth / 5;
    } else {
        maximumSize = window.innerWidth / 2.8;
    }

    if (toggleRotateBox) {
        rotateY(millis() / 5000);
    }

    background(245);
    orbitControl(1, 1, 1);
    normalMaterial();

    // my cube
    if (toggleShowBox) {
        noFill();
        stroke(0, 0, 0);
        strokeWeight(0.35);
        push();
        translate(0, 0, 0);
        box(maximumSize);
        pop();
    }

    // accumlate data
    accumlateData();

    // draw data
    drawData();

    if (temp.length > 100) {
        if (toggleInstantData) {
            temp.shift();
        }
    }
}

function accumlateData() {
    if (arrdFront.length !== 0 || arrdRight.length !== 0) {

        let x, y, z, point;

        if (toggleFront && arrFront.length !== 0 && arrdFront.length !== 0) {
            x = convertRange(arrFront[0].x, [0, 640], [width / 2 - maximumSize / 2, width / 2 + maximumSize / 2]);
            y = convertRange(arrFront[0].y, [0, 480], [height / 2 - maximumSize / 2, height / 2 + maximumSize / 2]);
            z = maximumSize / 2;
            point = arrdFront[0].data;

            temp.push({ x: x, y: y, z: z, r: point[0], g: point[1], b: point[2] });
        }

        if (toggleRight && arrRight.length !== 0 && arrdRight.length !== 0) {
            x = width / 2 + maximumSize / 2;
            y = convertRange(arrRight[0].y, [0, 480], [height / 2 - maximumSize / 2, height / 2 + maximumSize / 2]);
            z = convertRange(arrRight[0].x, [0, 640], [-maximumSize / 2, maximumSize / 2]);
            point = arrdRight[0].data;

            temp.push({ x: x, y: y, z: z, r: point[0], g: point[1], b: point[2] });
        }

        if (toggleBack && arrBack.length !== 0 && arrdBack.length !== 0) {
            x = convertRange(arrBack[0].x, [0, 640], [width / 2 - maximumSize / 2, width / 2 + maximumSize / 2]);
            y = convertRange(arrBack[0].y, [0, 480], [height / 2 - maximumSize / 2, height / 2 + maximumSize / 2]);
            z = -maximumSize / 2;
            point = arrdBack[0].data;

            temp.push({ x: x, y: y, z: z, r: point[0], g: point[1], b: point[2] });
        }

        if (toggleLeft && arrLeft.length !== 0 && arrdLeft.length !== 0) {
            x = width / 2 - maximumSize / 2;
            y = convertRange(arrLeft[0].y, [0, 480], [height / 2 - maximumSize / 2, height / 2 + maximumSize / 2]);
            z = convertRange(arrLeft[0].x, [0, 640], [-maximumSize / 2, maximumSize / 2]);
            point = arrdLeft[0].data;

            temp.push({ x: x, y: y, z: z, r: point[0], g: point[1], b: point[2] });
        }

        if (toggleTop && arrTop.length !== 0 && arrdTop.length !== 0) {
            x = convertRange(arrTop[0].x, [0, 640], [width / 2 - maximumSize / 2, width / 2 + maximumSize / 2]);
            y = height / 2 - maximumSize / 2;
            z = convertRange(arrTop[0].y, [0, 480], [-maximumSize / 2, maximumSize / 2]);
            point = arrdTop[0].data;

            temp.push({ x: x, y: y, z: z, r: point[0], g: point[1], b: point[2] });
        }

        if (toggleBottom && arrBottom.length !== 0 && arrdBottom.length !== 0) {
            x = convertRange(arrBottom[0].x, [0, 640], [width / 2 - maximumSize / 2, width / 2 + maximumSize / 2]);
            y = height / 2 + maximumSize / 2;
            z = convertRange(arrBottom[0].y, [0, 480], [-maximumSize / 2, maximumSize / 2]);
            point = arrdBottom[0].data;

            temp.push({ x: x, y: y, z: z, r: point[0], g: point[1], b: point[2] });
        }
    }
}

function windowResized() {
    if (window.innerWidth >= 768) {
        resizeCanvas(window.innerWidth / 2, window.innerHeight, WEBGL);
    } else {
        resizeCanvas(window.innerWidth, window.innerHeight / 2, WEBGL);
    }
}

function drawData() {
    push();
    translate(-width / 2, -height / 2, 0);
    beginShape();
    for (let i = 0; i < temp.length; i++) {
        const x = temp[i].x;
        const y = temp[i].y;
        const z = temp[i].z;
        const rgb = `rgb(${temp[i].r}, ${temp[i].g}, ${temp[i].b})`;

        if (toggleFill) {
            fill(rgb);
            noStroke();
        }

        if (toggleStroke) {
            stroke(rgb);
            noFill();
        }

        vertex(x, y, z);
    }
    endShape();
    pop();
}