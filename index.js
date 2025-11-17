const pomodoroElem = document.querySelector('[data-js-pomodoro]');
pomodoroElem.innerHTML = '00:00';

const btnStart = document.querySelector('[data-js-start]');

// чтобы цифры начинали идти

let numPomodoro = 10;

function countDown() {
    if(numPomodoro >= 0) {
        pomodoroElem.innerHTML = numPomodoro < 10 ? `00:0${numPomodoro}` : `00:${numPomodoro}`;
        numPomodoro--;
        setTimeout(countDown, 1000);
    }
}

btnStart.addEventListener('click', countDown);