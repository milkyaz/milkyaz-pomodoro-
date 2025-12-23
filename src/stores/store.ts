import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useClockSound } from '@/composables/useSound.ts'

export const useMainStore = defineStore('store', () => {
  const numPomodoro = ref(0);
  const timerId = ref(0);
  const display = computed(() => {
    const totalSeconds = numPomodoro.value;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  });
  const isDisableBtn = ref(false);
  const isSound = ref(false);
  const { startTicking } = useClockSound();

  function increment() {
    numPomodoro.value++
  }

  function addTenNum() {
    numPomodoro.value = numPomodoro.value + 10;
  }

  function addMinute() {
    numPomodoro.value = numPomodoro.value + 60;
  }


  function decrement() {
    numPomodoro.value--
    if(numPomodoro.value < 0) {
      return numPomodoro.value = 0;
    }
  }

  function removeTenNum() {
    numPomodoro.value = numPomodoro.value - 10;
    if(numPomodoro.value < 0) {
      return numPomodoro.value = 0;
    }
  }

  function removeMinute() {
    numPomodoro.value = numPomodoro.value - 60;
    if(numPomodoro.value < 0) {
      return numPomodoro.value = 0;
    }
  }

  function startTimer() {
    if (numPomodoro.value > 0) {
      isDisableBtn.value = true;
      if(isSound.value) startTicking();
      numPomodoro.value--;
      timerId.value = setTimeout(startTimer, 1000);
    } else if (numPomodoro.value <= 0) {
      isDisableBtn.value = false;
    }
  }

  function stopTimer() {
    isDisableBtn.value = false;
    return clearTimeout(timerId.value)
  }

  function resetTimer() {
    numPomodoro.value = 0;
    stopTimer();
  }


  return {
    display,
    numPomodoro,
    timerId,
    isDisableBtn,
    isSound,
    startTimer,
    stopTimer,
    resetTimer,
    increment,
    decrement,
    addTenNum,
    addMinute,
    removeMinute,
    removeTenNum,
  };
})
