const startControls = document.getElementById('start-controls');
const startButton = document.getElementById('start-btn');
const fullControls = document.getElementById('full-controls');
const resetButton = document.getElementById('reset-btn');
const pauseButton = document.getElementById('pause-btn');
const resumeButton = document.getElementById('resume-btn');
const breakButton = document.getElementById('break-btn');

// Event Listeners
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resumeButton.addEventListener('click', resumeTimer);

function startTimer() {
    startControls.classList.remove('active');
    fullControls.classList.add('active');
}

function pauseTimer() {
    pauseButton.classList.remove('active');
    resumeButton.classList.add('active');
}

function resumeTimer() {
    pauseButton.classList.add('active');
    resumeButton.classList.remove('active');
}
