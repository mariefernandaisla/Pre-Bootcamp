console.log("page loaded...");
let myVideo = document.getElementById("myVideo");
let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");

playButton.addEventListener("click", function() {
  myVideo.play();
});

pauseButton.addEventListener("click", function() {
  myVideo.pause();
});