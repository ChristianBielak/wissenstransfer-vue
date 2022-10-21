<template>
  <button @click="emitEvent">{{ `${textRequired} ${textOptional}` }}</button>
</template>

<script setup lang="ts">
interface props {
  textRequired: string;
  textOptional?: string;
}

const props = defineProps<props>();

const emit = defineEmits(["buttonClicked"]);
function emitEvent() {
  emit("buttonClicked");
}
</script>

<style scoped></style>
