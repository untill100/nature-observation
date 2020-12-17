const show_notice = document.querySelector("#toggle-notice");
const notice = document.querySelector("#notice");

show_notice.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="25" height="25">
<path d="M10,20A10,10,0,1,1,20,10,10.0114,10.0114,0,0,1,10,20ZM10,2a8,8,0,1,0,8,8A8.0092,8.0092,0,0,0,10,2Z" />
<path d="M10,15a5,5,0,1,0-5-5,5.0005,5.0005,0,0,0,5,5" />
</svg>`;

if (window.innerWidth <= 768) {
    create_notice_mobile();
} else {
    create_notice_desktop();
}

function create_notice_mobile() {
    const createNotice = `
    <div id="notice-heading">
        <p>
            이 웹사이트는 데스크톱 디바이스에서 원활한 사용이 가능합니다.
            <br>
            This website works seamlessly on desktop devices.
            <br>
            このウェブサイトはデスクトップデバイスで円滑に利用できます。
        </p>
    </div>
    <div id="notice-btns">
        <div id="yesbtn" class="btns">
            OK
        </div>
    </div>
    `;

    notice.innerHTML = createNotice;
    notice.style.top = -notice.offsetHeight + "px";

    setTimeout(() => {
        handle_notice_mobile();
    }, 1000);

    function handle_notice_mobile() {
        notice.style.opacity = 1;
        notice.style.transition = "top 0.25s ease-in";
        notice.style.top = 0 + "px";

        const yesbtn = document.querySelector("#yesbtn");
        yesbtn.style.borderRight = "1px solid rgb(200, 200, 200)";

        yesbtn.addEventListener("click", function (e) {
            notice.style.top = -notice.offsetHeight + "px";
            setTimeout(() => {
                notice.parentNode.removeChild(notice);
            }, 1000);
        });
    }
}

function create_notice_desktop() {
    const createNotice = `
    <div id="notice-heading">
        <p>
            사이트에서 웹 카메라 사용을 요청합니다.
            <br>
            The site requests the use of a web camera.
            <br>
            サイトがウェブカメラの使用を要請します。
        </p>
    </div>
    <div id="notice-btns">
        <div id="yesbtn" class="btns">
            OK
        </div>
        <div id="nobtn" class="btns">
            NO
        </div>
    </div>
    `;

    notice.innerHTML = createNotice;
    notice.style.top = -notice.offsetHeight + "px";

    setTimeout(() => {
        handle_notice_desktop();
    }, 1000);

    function handle_notice_desktop() {
        notice.style.opacity = 1;
        notice.style.transition = "top 0.25s ease-in";
        notice.style.top = 0 + "px";

        const yesbtn = document.querySelector("#yesbtn");
        const nobtn = document.querySelector("#nobtn");

        yesbtn.addEventListener("click", function (e) {
            notice.parentNode.removeChild(notice);

            Promise.all([
                faceapi.nets.tinyFaceDetector.loadFromUri("assets/models"),
                faceapi.nets.faceLandmark68Net.loadFromUri("assets/models"),
                faceapi.nets.faceRecognitionNet.loadFromUri("assets/models"),
                faceapi.nets.faceExpressionNet.loadFromUri("assets/models"),
            ]).then(startVideo);
        });

        nobtn.addEventListener("click", function (e) {
            notice.style.top = -notice.offsetHeight + "px";

            const show_notice = document.querySelector("#toggle-notice");
            show_notice.style.display = "block";
            setTimeout(() => {
                show_notice.style.opacity = 1;
            }, 500);

            show_notice.addEventListener("click", function (e) {
                show_notice.style.opacity = 0;
                setTimeout(() => {
                    show_notice.style.display = "none";
                    notice.style.opacity = 1;
                    notice.style.transition = "top 0.25s ease-in";
                    notice.style.top = 0 + "px";
                }, 500);
            });
        });
    }
}