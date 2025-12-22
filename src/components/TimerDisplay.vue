<script setup lang="ts">
import { useMainStore } from '@/stores/store.ts'
import Button from '@/components/Button.vue'
import { Icon } from '@iconify/vue'

const mainStore = useMainStore()
</script>

<template>
  <div class="flex-col justify-center items-center mt-30">
    <Button class="mb-10" @click="mainStore.increment" icon="material-symbols:add" />
    <div class="flex justify-center mb-10 text-6xl">
      <Icon class="rotate-225 absolute left-[550px]" icon="noto:flashlight" width="90" />
      <div class="cone-only flex justify-center pl-10 pt-3 text-center relative">
        {{ mainStore.display }}
      </div>
    </div>
    <Button class="mb-10" @click="mainStore.decrement" icon="material-symbols:remove" />
    <div class="flex gap-5 justify-center items-center w-full">
      <Button @click="mainStore.startTimer" val="START" />
      <Button @click="mainStore.stopTimer" val="STOP" />
      <Button @click="mainStore.resetTimer" val="RESET" />
    </div>
  </div>
</template>

<style scoped>
button {
  width: 100px;
}

/* Тёплый ламповый свет для Pomodoro */
/* Просто конус без фона на весь экран */
.cone-only {
  width: 14%;
  height: 100px;
  background: radial-gradient(
    ellipse at 251% 44%,
    rgba(279, 250, 210, 3.8) 0,
    rgba(255, 254, 190, 0.4) 46%,
    transparent 70%
  );
}
</style>
