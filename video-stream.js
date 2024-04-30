const video = document.getElementById("videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
    })
    .catch((error) => {
      console.log("Error in displaying video: ", error);
    });
} else {
  console.log("getUserMedia is not supported");
}
