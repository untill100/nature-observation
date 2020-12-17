const webcamVideo = document.querySelector("#webcamVideo");

function startVideo() {
    camPermission = true; // permit rotate cube
    navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
            .then(function (stream) {
                webcamVideo.srcObject = stream;
            })
            .catch(function (err) {
                window.alert(err);
            });
    } else {
        window.alert("Your browser does not support usermedia, web camera device.");
    }
}

if (webcamVideo !== null && webcamVideo !== undefined) {
    webcamVideo.addEventListener("play", () => {
        setInterval(async () => {
            const detections = await faceapi.detectAllFaces(webcamVideo, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
            const pixelSize = 1; // fit with the same the const from instance-canvas.js
            const videoWidth = webcamVideo.clientWidth;
            const videoHeight = webcamVideo.clientHeight;

            // get position
            if (typeof (detections[0]) !== "undefined" && detections[0] !== null) {
                const _x = detections[0].landmarks._positions[39]["_x"];
                const _y = detections[0].landmarks._positions[39]["_y"];

                const distanceX = Math.abs(_x - detections[0].landmarks._positions[42]["_x"]);
                const distanceY = Math.abs(_y - detections[0].landmarks._positions[42]["_y"]);

                const x = videoWidth - (_x + distanceX / 2);
                const y = _y + distanceY / 2;

                toggleFront ? arrFront[0] = { "x": x, "y": y } : null;
                toggleRight ? arrRight[0] = { "x": x, "y": y } : null;
                toggleBack ? arrBack[0] = { "x": x, "y": y } : null;
                toggleLeft ? arrLeft[0] = { "x": x, "y": y } : null;
                toggleTop ? arrTop[0] = { "x": x, "y": y } : null;
                toggleBottom ? arrBottom[0] = { "x": x, "y": y } : null;
            }

            // get image data
            if (toggleFront && arrFront.length !== 0) {
                const convertedX = convertRange(arrFront[0].x, [0, videoWidth], [0, window.innerWidth / 2]);
                const convertedY = convertRange(arrFront[0].y, [0, videoHeight], [0, window.innerWidth / 2]);
                const d = cubeCtxGroup[0].getImageData(convertedX, convertedY, pixelSize, pixelSize);

                arrdFront[0] = d;
            }

            if (toggleRight && arrRight.length !== 0) {
                const convertedX = convertRange(arrRight[0].x, [0, videoWidth], [0, window.innerWidth / 2]);
                const convertedY = convertRange(arrRight[0].y, [0, videoHeight], [0, window.innerWidth / 2]);
                const d = cubeCtxGroup[1].getImageData(convertedX, convertedY, pixelSize, pixelSize);

                arrdRight[0] = d;
            }

            if (toggleBack && arrBack.length !== 0) {
                const convertedX = convertRange(arrBack[0].x, [0, videoWidth], [0, window.innerWidth / 2]);
                const convertedY = convertRange(arrBack[0].y, [0, videoHeight], [0, window.innerWidth / 2]);
                const d = cubeCtxGroup[2].getImageData(convertedX, convertedY, pixelSize, pixelSize);

                arrdBack[0] = d;
            }

            if (toggleLeft && arrLeft.length !== 0) {
                const convertedX = convertRange(arrLeft[0].x, [0, videoWidth], [0, window.innerWidth / 2]);
                const convertedY = convertRange(arrLeft[0].y, [0, videoHeight], [0, window.innerWidth / 2]);
                const d = cubeCtxGroup[3].getImageData(convertedX, convertedY, pixelSize, pixelSize);

                arrdLeft[0] = d;
            }

            if (toggleTop && arrTop.length !== 0) {
                const convertedX = convertRange(arrTop[0].x, [0, videoWidth], [0, window.innerWidth / 2]);
                const convertedY = convertRange(arrTop[0].y, [0, videoHeight], [0, window.innerWidth / 2]);
                const d = cubeCtxGroup[4].getImageData(convertedX, convertedY, pixelSize, pixelSize);

                arrdTop[0] = d;
            }

            if (toggleBottom && arrBottom.length !== 0) {
                const convertedX = convertRange(arrBottom[0].x, [0, videoWidth], [0, window.innerWidth / 2]);
                const convertedY = convertRange(arrBottom[0].y, [0, videoHeight], [0, window.innerWidth / 2]);
                const d = cubeCtxGroup[5].getImageData(convertedX, convertedY, pixelSize, pixelSize);

                arrdBottom[0] = d;
            }
        }, 100);
    });
}