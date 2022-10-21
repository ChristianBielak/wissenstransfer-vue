<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useTodoStore } from "./store/todoStore";
import ButtonComponent from "./components/ButtonComponent.vue";

let counterNotReactive: number = 0;
let counterReactive = ref<number>(0);
let computedCounter = computed((): number => counterReactive.value * 2);
let vuexBinding = computed((): string[] => todoStore.todos);

const todoStore = useTodoStore();
function addTodo(todo: string) {
  todoStore.addTodo(todo);
}

watch(todoStore.todos, triggerFunction);
function triggerFunction() {
  counterNotReactive++;
  counterReactive.value++;
}
</script>

<template>
  <div>
    <ButtonComponent
      @button-clicked="addTodo('foo')"
      text-required="click me"
      text-optional="hard"
    />

    <ul>
      <li v-for="todo in vuexBinding">
        {{ todo }}
      </li>
    </ul>

    <br />
    {{ counterNotReactive }}
    <br />
    {{ counterReactive }}
    <br />
    {{ computedCounter }}
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
