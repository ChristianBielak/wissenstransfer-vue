<template>
  <div class="home">
    {{ todos }}
    <ButtonComponent text="click me" @buttonClicked="addTodo('foo')" />
    <p>
      {{ counter }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import ButtonComponent from "@/components/ButtonComponent.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    ButtonComponent,
  },
})
export default class HomeView extends Vue {
  counter = 0;

  addTodo(todo: string) {
    this.$store.dispatch("todo/addTodo", todo);
  }

  get activeTodo(): string {
    return this.$store.getters["todo/getTodo"](1);
  }

  get todos(): string[] {
    return this.$store.state.todo.todos;
  }

  @Watch("todos")
  onTodosChange() {
    this.counter++;
  }
}
</script>
