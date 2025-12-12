<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useMainStore } from '@/stores/store.ts'

const emit = defineEmits(['click']);
const mainStore = useMainStore();
const props = defineProps<{
  val?: string;
  icon?: string;
}>()

function handleClick() {
  emit('click');
}

</script>

<template>
  <div v-if="icon" class="flex gap-5 justify-center">
    <button :class="[mainStore.isDisableBtn ? 'btn-disabled' : '' ]" class="btn btn-outline btn-info btn-md" @click="handleClick">
      <Icon :icon="icon" width="30" />
    </button>
  </div>
  <div v-else class="flex gap-5">
    <button class="btn btn-outline btn-info btn-lg" @click="handleClick">{{ props.val }}</button>
  </div>
</template>

<style scoped>

</style>
