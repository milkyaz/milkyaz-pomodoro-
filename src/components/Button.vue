<script setup lang="ts">
import {useMainStore} from "@/stores/store.ts";

const mainStore = useMainStore();

</script>

<template>
  <div class="flex gap-5">
    <button class="btn btn-outline btn-info btn-lg" @click="mainStore.startTimer()">Start</button>
    <button class="btn btn-outline btn-info btn-lg" @click="mainStore.stopTimer()">Stop</button>
    <button class="btn btn-outline btn-info btn-lg" @click="mainStore.resetTimer()">Reset</button>
  </div>
</template>

<style scoped>

</style>
