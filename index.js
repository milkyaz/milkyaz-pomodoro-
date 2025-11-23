const pomodoroElem = document.querySelector('[data-js-pomodoro]');


const btnStartElement = document.querySelector('[data-js-start]');
const btnStopElement = document.querySelector('[data-js-stop]');
const btnResetElement = document.querySelector('[data-js-reset]');


let numPomodoro = 10;
let timerId;
pomodoroElem.innerHTML = `00:${numPomodoro}`;

function startTimer() {
    console.log(numPomodoro)
    if(numPomodoro >= 0) {
        pomodoroElem.innerHTML = numPomodoro < 10 ? `00:0${numPomodoro}` : `00:${numPomodoro}`;
        numPomodoro--;
        timerId = setTimeout(startTimer, 1000);
    }

}

function stopTimer() {
   return clearTimeout(timerId)
}

function resetTimer() {
    numPomodoro = 10;
    pomodoroElem.innerHTML = `00:${numPomodoro}`;
    stopTimer();
}

btnStartElement.addEventListener('click', startTimer);
btnStopElement.addEventListener('click', stopTimer);
btnResetElement.addEventListener('click', resetTimer);

