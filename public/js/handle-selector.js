const scene = document.querySelector(".scene");
const cube = document.querySelector('.cube');
const showList = ["show-front", "show-right", "show-back", "show-left", "show-top", "show-bottom"];

let currentClass = null;
let camPermission = false;

scene.addEventListener("click", function (e) {
    if (camPermission) {
        changeRenewal();
    } else {
        const camera_access_notice = document.querySelector("#camera-access-notice");
        if(camera_access_notice === undefined || camera_access_notice === null) {
            create_camera_access_notice();
        }
    }
});

function changeRenewal() {
    let showClass;

    if(currentClass === null) {
        showClass = "show-front";
    } else if (currentClass === "show-front") {
        showClass = "show-right";
    } else if (currentClass === "show-right") {
        showClass = "show-back";
    } else if (currentClass === "show-back") {
        showClass = "show-left";
    } else if (currentClass === "show-left") {
        showClass = "show-top";
    } else if (currentClass === "show-top") {
        showClass = "show-bottom";
    } else if (currentClass === "show-bottom") {
        showClass = "show-front";
    }

    cube.classList.remove(currentClass);
    cube.classList.add(showClass);

    currentClass = showClass;

    switch (showClass) {
        case "show-front":
            toggleFront = true;
            toggleRight = toggleBack = toggleLeft = toggleTop = toggleBottom = false;
            break;

        case "show-right":
            toggleRight = true;
            toggleFront = toggleBack = toggleLeft = toggleTop = toggleBottom = false;
            break;

        case "show-back":
            toggleBack = true;
            toggleFront = toggleRight = toggleLeft = toggleTop = toggleBottom = false;
            break;

        case "show-left":
            toggleLeft = true;
            toggleFront = toggleRight = toggleBack = toggleTop = toggleBottom = false;
            break;

        case "show-top":
            toggleTop = true;
            toggleFront = toggleRight = toggleBack = toggleLeft = toggleBottom = false;
            break;

        case "show-bottom":
            toggleBottom = true;
            toggleFront = toggleRight = toggleBack = toggleLeft = toggleTop = false;
            break;
    }
}

// initial change
changeRenewal();