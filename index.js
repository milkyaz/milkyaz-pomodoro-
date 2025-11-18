const pomodoroElem = document.querySelector('[data-js-pomodoro]');


const btnStart = document.querySelector('[data-js-start]');
const btnStop = document.querySelector('[data-js-stop]');

// чтобы цифры начинали идти

let numPomodoro = 10;
let timerId;
pomodoroElem.innerHTML = `00:${numPomodoro}`;

function startTimer() {
    if(numPomodoro >= 0) {
        pomodoroElem.innerHTML = numPomodoro < 10 ? `00:0${numPomodoro}` : `00:${numPomodoro}`;
        numPomodoro--;
        timerId = setTimeout(startTimer, 1000);
    }
}

btnStart.addEventListener('click', startTimer);
btnStop.addEventListener('click', () =>  clearTimeout(timerId))