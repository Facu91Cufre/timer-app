const timer = document.getElementById("timer");
const playPauseBtn = document.getElementById("play-pause-btn");
const stopBtn = document.getElementById("stop");
let displayTimer = document.getElementById("timer");

let seconds = 0;
let minutes = 0;
let hours = 0;

let secondsWithZero = 0;
let minutesWithZero = 0;
let hoursWithZero = 0;

let timerInterval = 0;
let timerStatus = "stopped";

const startWatch = () => {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }
  if (seconds < 10) {
    secondsWithZero = "0" + seconds.toString();
  } else {
    secondsWithZero = seconds;
  }
  if (minutes < 10) {
    minutesWithZero = "0" + minutes.toString();
  } else {
    minutesWithZero = minutes;
  }
  if (hours < 10) {
    hoursWithZero = "0" + hours.toString();
  } else {
    hoursWithZero = hours;
  }
  displayTimer.innerText = `${hoursWithZero}:${minutesWithZero}:${secondsWithZero}`;
};

playPauseBtn.addEventListener("click", () => {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(startWatch, 1000); // setInterval tiene un delay default en milisegundos, asi que si pongo 1000, el temporizador va a aumentar cada segundo.;
    playPauseBtn.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg"  width="50"  height="50"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-player-pause"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /></svg>`;
    playPauseBtn.classList.add("pause");
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    playPauseBtn.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-player-play"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 4v16l13 -8z" />
      </svg>`;
    playPauseBtn.classList.add("play");
    playPauseBtn.classList.remove("pause");
    timerStatus = "stopped";
  }
});

stopBtn.addEventListener("click", () => {

    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.textContent = "00:00:00";
    timerStatus = "stopped";
    playPauseBtn.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-player-play"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 4v16l13 -8z" />
  </svg>`;
    playPauseBtn.classList.remove("pause");
    playPauseBtn.classList.add("play");
})