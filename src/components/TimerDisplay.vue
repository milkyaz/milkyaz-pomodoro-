<script setup lang="ts">

import {computed, ref} from "vue";

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
</script>

<template>
  <div class="wrapper">
    <div class="pomodoro">{{ display }}</div>
    <div class="pomodoro-btn">
      <button @click="startTimer()">Start</button>
      <button @click="stopTimer()">Stop</button>
      <button @click="resetTimer()">Reset</button>
    </div>

  </div>

</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.pomodoro {
  text-align: center;
}
.pomodoro-btn {
  display: flex;
  justify-content: center;
}
button {
  width: 100px;
}
</style>
