<script setup lang="ts">
import { useMainStore } from "@/stores/store.ts";
import Button from "@/components/Button.vue";

const mainStore = useMainStore();

</script>

<template>
  <div class="flex-col justify-center items-center w-full mt-30 ">
    <div class="text-center mb-5">{{ mainStore.display }}</div>
    <div class="flex gap-5 justify-center items-center w-full">
      <Button />
    </div>
  </div>
</template>

<style scoped>

button {
  width: 100px;
}
</style>
