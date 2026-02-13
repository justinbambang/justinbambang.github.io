const startBtn = document.getElementById("start-btn");
const introScreen = document.getElementById("intro-screen");
const videoContainer = document.querySelector(".video-container");
const mainVideo = document.getElementById("mainVideo");
const endingScreen = document.getElementById("endingScreen");
const replayBtn = document.getElementById("replayBtn");

startBtn.addEventListener("click", () => {
    introScreen.style.opacity = "0";

    setTimeout(() => {
        introScreen.style.display = "none";
    }, 1000);

    videoContainer.classList.add("active");
    mainVideo.play();
});

/* Saat video selesai */
mainVideo.addEventListener("ended", () => {
    endingScreen.classList.add("active");
});

/* Klik mau ulang */
replayBtn.addEventListener("click", () => {
    endingScreen.classList.remove("active");

    mainVideo.currentTime = 0;
    mainVideo.play();
});
