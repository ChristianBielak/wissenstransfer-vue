<template>
  <div class="home">
    {{ $todos }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  addTodo(todo: string) {
    this.$store.dispatch("todo/addTodo", todo);
  }

  get activeTodo(): string {
    return this.$store.getters["todo/getTodo"](1);
  }
}
</script>
