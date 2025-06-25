const startControls = document.getElementById('start-controls');
const startButton = document.getElementById('start-btn');
const fullControls = document.getElementById('full-controls');
const stopButton = document.getElementById('stop-btn');
const pauseButton = document.getElementById('pause-btn');
const resumeButton = document.getElementById('resume-btn');
const breakButton = document.getElementById('break-btn');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const timerState = document.getElementById('pomodoro-state');


// Event Listeners
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resumeButton.addEventListener('click', resumeTimer);
stopButton.addEventListener('click', stopTimer);
breakButton.addEventListener('click', breakTimer);

let timerInterval;
let minutesLeft = 25;
let secondsLeft = 0;
let paused = false;


function startTimer() {
    timerState.textContent = 'Working';
    timerInterval = setInterval(() => {
        if (secondsLeft === 0) {
            if (minutesLeft === 0) {
                clearInterval(timerInterval);
                alert("Break Time! Take a short break.");
                return;
            }
            minutesLeft--;
            secondsLeft = 59;
        } else {
            secondsLeft--;
        }
        minutes.textContent = String(minutesLeft).padStart(2, '0');
        seconds.textContent = String(secondsLeft).padStart(2, '0');
    }, 1000);

    startControls.classList.remove('active');
    fullControls.classList.add('active');
    pauseButton.classList.add('active');
    resumeButton.classList.remove('active');
}

function pauseTimer() {
    clearInterval(timerInterval);

    paused = true;


    pauseButton.classList.remove('active');
    resumeButton.classList.add('active');
}

function resumeTimer() {
    startTimer();

    paused = false;

    pauseButton.classList.add('active');
    resumeButton.classList.remove('active');
}

function stopTimer() {
    clearInterval(timerInterval);
    timerState.textContent = 'Pomodoro';
    minutesLeft = 25;
    secondsLeft = 0;

    minutes.textContent = String(minutesLeft).padStart(2, '0');
    seconds.textContent = String(secondsLeft).padStart(2, '0');

    fullControls.classList.remove('active');
    startControls.classList.add('active');
}

function breakTimer() {
    clearInterval(timerInterval);
    timerState.textContent = 'Break Time';
    minutesLeft = 5;
    secondsLeft = 0;

    minutes.textContent = String(minutesLeft).padStart(2, '0');
    seconds.textContent = String(secondsLeft).padStart(2, '0');

    timerInterval = setInterval(() => {
        if (secondsLeft === 0) {
            if (minutesLeft === 0) {
                clearInterval(timerInterval);
                alert("Break Time! Take a short break.");
                return;
            }
            minutesLeft--;
            secondsLeft = 59;
        } else {
            secondsLeft--;
        }
        minutes.textContent = String(minutesLeft).padStart(2, '0');
        seconds.textContent = String(secondsLeft).padStart(2, '0');
    }, 1000);


}