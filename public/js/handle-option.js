resize_and_reposition_options();

window.addEventListener("resize", function (e) {
    resize_and_reposition_options();
});


// option
const option = document.querySelectorAll(".option");

for (let i = 0; i < option.length; i++) { // manage boolean in handle-output.js
    option[i].addEventListener("click", function (e) {
        if (camPermission) {
            if (this.innerText === "Fill") {
                toggleFill = true;
                toggleStroke = false;
            }

            // option-left
            if (this.innerText === "Stroke") {
                toggleStroke = true;
                toggleFill = false;
            }

            if (this.innerText === "Full Data") {
                toggleInstantData = false;
            }

            if (this.innerText === "Instant Data") {
                toggleInstantData = true;
            }

            if (this.innerText === "Show Box") {
                toggleShowBox = true;
            }

            if (this.innerText === "Hide Box") {
                toggleShowBox = false;
            }

            if (this.innerText === "Rotate Box") {
                toggleRotateBox = true;
            }

            if (this.innerText === "Fix Box") {
                toggleRotateBox = false;
            }

            // option-right
            if (this.innerText === "Front") {
                changeRenewal_by_options("show-front");
            }

            if (this.innerText === "Right") {
                changeRenewal_by_options("show-right");
            }

            if (this.innerText === "Back") {
                changeRenewal_by_options("show-back");
            }

            if (this.innerText === "Left") {
                changeRenewal_by_options("show-left");
            }

            if (this.innerText === "Top") {
                changeRenewal_by_options("show-top");
            }

            if (this.innerText === "Bottom") {
                changeRenewal_by_options("show-bottom");
            }

            const container = this.parentElement;

            for (let j = 0; j < container.children.length; j++) {
                container.children[j].style.order = 2
            }

            this.style.order = 1;

            if (container.style.maxHeight !== "100vh") {
                container.style.maxHeight = "100vh";
                container.style.transition = "max-height 0.5s ease-in";
                for (let j = 0; j < container.children.length; j++) {
                    container.children[j].style.backgroundColor = "rgb(255, 255, 255)";
                    container.children[j].style.borderBottom = "1px solid rgb(200, 200, 200)";
                    const arrow = container.children[j].children[0];
                    arrow.style.transform = "scaleY(-1)";
                }
                this.style.borderTop = "1px solid rgb(200, 200, 200)";
            } else {
                closeContainer();
            }

            container.addEventListener("mouseleave", function (e) {
                closeContainer();
            });

            function closeContainer() {
                if (window.innerWidth <= 768) {
                    container.style.maxHeight = "25px";
                } else {
                    container.style.maxHeight = "40px";
                }
                container.style.transition = "none";
                for (let j = 0; j < container.children.length; j++) {
                    container.children[j].style.backgroundColor = "transparent";
                    container.children[j].style.borderBottom = "none";
                    container.children[j].style.borderTop = "none";
                    const arrow = container.children[j].children[0];
                    arrow.style.transform = "scaleY(1)";
                }
                // if(this !== undefined && this !== null) {
                //     this.style.borderTop = "none";
                // }
            }

        } else {
            const camera_access_notice = document.querySelector("#camera-access-notice");
            if(camera_access_notice === undefined || camera_access_notice === null) {
                create_camera_access_notice();
            }
        }
    });
}

function create_camera_access_notice() {
    const camera_access_notice = document.createElement("div");
    if(window.innerWidth <= 768) {
        camera_access_notice.innerHTML = `
        <p class="ko">데스크톱 디바이스에서 접속해주세요.</p>
        <p class="en" style="display: block;">Please connect from the desktop device.</p>
        <p class="jp" style="display: block;">デスクトップデバイスから接続してください。</p>
        `;
    } else {
        camera_access_notice.innerHTML = `
        <p class="ko">먼저 웹 카메라의 사용을 허용해주세요.</p>
        <p class="en" style="display: block;">Please admit web camera use.</p>
        <p class="jp" style="display: block;">まずウェブカメラの使用を許可してください。</p>
        `;
    }

    camera_access_notice.setAttribute("id", "camera-access-notice");

    document.body.appendChild(camera_access_notice);
    resize();

    if(camera_access_notice !== null && camera_access_notice !== undefined) {
        setTimeout(() => {
            camera_access_notice.style.opacity = 1;
        }, 500);
        setTimeout(() => {
            camera_access_notice.style.opacity = 0;
        }, 3000);
        setTimeout(() => {
            camera_access_notice.parentNode.removeChild(camera_access_notice);
        }, 4000);
    }

    window.addEventListener("resize", function(e) {
        resize();
    });

    function resize() {
        camera_access_notice.style.left = window.innerWidth / 2 - camera_access_notice.offsetWidth / 2 + "px";
        camera_access_notice.style.top = window.innerHeight / 2 - camera_access_notice.offsetHeight / 2 + "px";
    }
}

// option-language
const option_lang = document.querySelectorAll(".option-lang");

for (let i = 0; i < option_lang.length; i++) {
    option_lang[i].addEventListener("click", function (e) {
        const ko = document.querySelectorAll(".ko");
        const en = document.querySelectorAll(".en");
        const jp = document.querySelectorAll(".jp");

        if (this.innerText === "English") {
            for (let j = 0; j < ko.length; j++) {
                ko[j].style.display = "none";
            }
            for (let j = 0; j < en.length; j++) {
                en[j].style.display = "block";
            }
            for (let j = 0; j < jp.length; j++) {
                jp[j].style.display = "none";
            }
        }

        if (this.innerText === "한국어") {
            for (let j = 0; j < ko.length; j++) {
                ko[j].style.display = "block";
            }
            for (let j = 0; j < en.length; j++) {
                en[j].style.display = "none";
            }
            for (let j = 0; j < jp.length; j++) {
                jp[j].style.display = "none";
            }
        }

        if (this.innerText === "日本語") {
            for (let j = 0; j < ko.length; j++) {
                ko[j].style.display = "none";
            }
            for (let j = 0; j < en.length; j++) {
                en[j].style.display = "none";
            }
            for (let j = 0; j < jp.length; j++) {
                jp[j].style.display = "block";
            }
        }

        const container = this.parentElement;

        for (let j = 0; j < container.children.length; j++) {
            container.children[j].style.order = 2
        }

        this.style.order = 1;

        if (window.innerWidth <= 768) {
            if (container.style.maxHeight !== 75 + "px") {
                container.style.maxHeight = 75 + "px";
                container.style.transition = "max-height 0.1s ease-in";
                for (let j = 0; j < container.children.length; j++) {
                    container.children[j].style.backgroundColor = "rgb(255, 255, 255)";
                    container.children[j].style.borderBottom = "1px solid rgb(200, 200, 200)";
                    const arrow = container.children[j].children[0];
                    arrow.style.transform = "scaleY(1)";
                }
                this.style.borderTop = "1px solid rgb(200, 200, 200)";
            } else {
                container.style.maxHeight = "25px";
                container.style.transition = "none";
                for (let j = 0; j < container.children.length; j++) {
                    container.children[j].style.backgroundColor = "rgb(255, 255, 255)";
                    container.children[j].style.borderBottom = "none";
                    container.children[j].style.borderTop = "none";
                    const arrow = container.children[j].children[0];
                    arrow.style.transform = "scaleY(-1)";
                }
                this.style.borderTop = "none";
            }
        } else {
            if (container.style.maxHeight !== 120 + "px") {
                container.style.maxHeight = 120 + "px";
                container.style.transition = "max-height 0.1s ease-in";
                for (let j = 0; j < container.children.length; j++) {
                    container.children[j].style.backgroundColor = "rgb(255, 255, 255)";
                    container.children[j].style.borderBottom = "1px solid rgb(200, 200, 200)";
                    const arrow = container.children[j].children[0];
                    arrow.style.transform = "scaleY(1)";
                }
                this.style.borderTop = "1px solid rgb(200, 200, 200)";
            } else {
                container.style.maxHeight = "40px";
                container.style.transition = "none";
                for (let j = 0; j < container.children.length; j++) {
                    container.children[j].style.backgroundColor = "rgb(255, 255, 255)";
                    container.children[j].style.borderBottom = "none";
                    container.children[j].style.borderTop = "none";
                    const arrow = container.children[j].children[0];
                    arrow.style.transform = "scaleY(-1)";
                }
                this.style.borderTop = "none";
            }
        }
    });
}


function resize_and_reposition_options() {
    const outputOptions = document.querySelectorAll(".option-container.output-options");
    const inputOptions = document.querySelectorAll(".option-container.input-options");

    if (window.innerWidth <= 768) {
        for (let i = 0; i < outputOptions.length; i++) {
            const margin = 30;
            const standard = ((window.innerWidth - margin) / 4);
            outputOptions[i].style.width = standard + "px";
            outputOptions[i].style.left = standard * i + margin / 4 + "px";
            outputOptions[i].style.bottom = 15 + "px";
        }

        for (let i = 0; i < inputOptions.length; i++) {
            const margin = 30;
            const standard = ((window.innerWidth - margin) / 2);
            inputOptions[i].style.width = standard + "px";
            inputOptions[i].style.left = standard * i + margin / 4 + "px";
            inputOptions[i].style.bottom = 15 + "px";
        }
    } else {
        for (let i = 0; i < outputOptions.length; i++) {
            const margin = 100;
            const standard = ((window.innerWidth - margin) / 8);
            outputOptions[i].style.width = standard + "px";
            outputOptions[i].style.left = standard * i + margin / 4 + "px";
            outputOptions[i].style.bottom = 0 + "px";
        }

        for (let i = 0; i < inputOptions.length; i++) {
            const margin = 100;
            const standard = ((window.innerWidth - margin) / 4);
            inputOptions[i].style.width = standard + "px";
            inputOptions[i].style.left = standard * i + margin / 4 + "px";
            inputOptions[i].style.bottom = 0 + "px";
        }
    }
}


function changeRenewal_by_options(position) {
    let showClass = position;

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