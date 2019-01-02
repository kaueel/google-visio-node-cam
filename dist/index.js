let NodeWebcam = require("node-webcam");
let opts = {
    width: 1280,
    height: 720,
    quality: 100,
    delay: 0,
    saveShots: true,
    output: "jpeg",
    device: false,
    callbackReturn: "location",
    verbose: false
};
let Webcam = NodeWebcam.create(opts);
Webcam.capture("test_picture", function (err, data) { });
NodeWebcam.capture("test_picture", opts, function (err, data) {
});
Webcam.list(function (list) {
    let anotherCam = NodeWebcam.create({ device: list[0] });
});
let opts2 = {
    callbackReturn: "base64"
};
NodeWebcam.capture("test_picture", opts2, function (err, data) {
    let image = "<img src='" + data + "'>";
});
//# sourceMappingURL=index.js.map