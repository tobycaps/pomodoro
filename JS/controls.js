const startControls = document.getElementById('start-controls');
const startButton = document.getElementById('start-btn');
const fullControls = document.getElementById('full-controls');
const stopButton = document.getElementById('stop-btn');
const pauseButton = document.getElementById('pause-btn');
const resumeButton = document.getElementById('resume-btn');
const breakButton = document.getElementById('break-btn');

// Event Listeners
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resumeButton.addEventListener('click', resumeTimer);
stopButton.addEventListener('click', stopTimer);

function startTimer() {
    startControls.classList.remove('active');
    fullControls.classList.add('active');
    pauseButton.classList.add('active');
    resumeButton.classList.remove('active');
}

function pauseTimer() {
    pauseButton.classList.remove('active');
    resumeButton.classList.add('active');
}

function resumeTimer() {
    pauseButton.classList.add('active');
    resumeButton.classList.remove('active');
}

function stopTimer() {
    fullControls.classList.remove('active');
    startControls.classList.add('active');
}