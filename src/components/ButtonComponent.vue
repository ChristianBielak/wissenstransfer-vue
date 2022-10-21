<template>
  <button @click="emitEvent()">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class extends Vue {
  @Prop()
  text!: string;
  //   @Prop({
  //     default: "default text",
  //   })
  //   text!: string;

  @Emit("buttonClicked")
  emitEvent() {
    // just emit event
  }
}
</script>

<style scoped></style>
