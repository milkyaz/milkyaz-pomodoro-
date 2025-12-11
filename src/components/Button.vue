<script setup lang="ts">

const emit = defineEmits(['click']);

const props = defineProps<{
  val?: string;
}>()

function handleClick() {
  emit('click');
}

</script>

<template>
  <div class="flex gap-5">
    <button class="btn btn-outline btn-info btn-lg" @click="handleClick">{{ props.val }}</button>
  </div>
</template>

<style scoped>

</style>
