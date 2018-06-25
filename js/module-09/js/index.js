"use strict";

const time = document.querySelector(".js-time");
const startBtn = document.querySelector(".js-start");
const resetBtn = document.querySelector(".js-reset");
const laps = document.querySelector('.js-laps');

let minutes;
let seconds;
let milliseconds;

const timer = {
  startTime: 0,
  deltaTime: 0,
  pauseTime: 0,
  id: null,
  isActiveStart: false,
  isActiveReset: false,
};

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer(target) {
  
  if (!timer.isActiveStart) {
    timer.startTime = Date.now();
    timer.isActiveStart = true;
    timer.isActiveReset = true;
    startBtn.textContent = 'Pause';
    resetBtn.textContent = 'Reset';
    timer.id = setInterval(updateTime, 100);
  } else {
    clearInterval(timer.id);
    timer.isActiveStart = false;
    timer.isActiveReset = false;
    timer.pauseTime = timer.deltaTime;
    startBtn.textContent = 'Continue';
    resetBtn.textContent = 'Lap';
  }
}

function createLap() {
  const lap = document.createElement('li');
  lap.textContent = time.textContent;
  const lapJs = [];
  lapJs.push(lap);
  laps.appendChild(lap);
}

function resetTimer(target) {
  if (!timer.isActiveReset) {
    createLap();
  } else {
  clearInterval(timer.id);
  timer.isActiveStart = false;
  timer.startTime = Date.now();
  timer.deltaTime = 0;
  timer.id = 0;
  timer.pauseTime = 0;
  time.textContent = getFormattedTime(timer.deltaTime);
  startBtn.textContent = 'Start';
  }
}

function updateTime() {
  const currentTime = Date.now() + timer.pauseTime;
  timer.deltaTime = currentTime - timer.startTime;
  time.textContent = getFormattedTime(timer.deltaTime);
}

function getFormattedTime(time) {
  const times = new Date(time);
  
  milliseconds = Number.parseInt(times.getMilliseconds() / 100);

  seconds = times.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  minutes = times.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return `${minutes}:${seconds}.${milliseconds}`;
}