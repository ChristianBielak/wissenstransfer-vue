import { defineStore } from "pinia";

export type RootState = {
  todos: string[];
  todo: string;
};

export const useTodoStore = defineStore({
  id: "todoStore",

  state: (): RootState => ({
    todos: ["Eat", "Sleep"],
    todo: "",
  }),

  getters: {
    getTodo: (state) => (index: number) => state.todos[index],
  },

  actions: {
    addTodo(todo: string) {
      this.todos.push(todo);
    },

    ADD_TODO(todo: string) {
      this.addTodo(todo);
    },
  },
});
