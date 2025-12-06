import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('store', () => {
  const numPomodoro = ref(10);
  const timerId = ref(0);
  const display = computed(() => {
    return numPomodoro.value;
  })

  function startTimer() {
    if (numPomodoro.value >= 0) {
      updatePomodoroDisplay();
      numPomodoro.value--;
      timerId.value = setTimeout(startTimer, 1000);
    }
  }

  function stopTimer() {
    return clearTimeout(timerId.value)
  }

  function resetTimer() {
    numPomodoro.value = 10;
    display.value = `00:${numPomodoro.value}`;
    stopTimer();
  }

  function updatePomodoroDisplay() {
    return display.value = numPomodoro.value < 10 ? `00:0${numPomodoro.value}` : `00:${numPomodoro.value}`;
  }

  return {
    display,
    startTimer,
    stopTimer,
    resetTimer
  };
})
