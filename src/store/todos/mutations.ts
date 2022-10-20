import { TodoState } from "./types";

export const mutations = {
  SET_TODO(state: TodoState, todo: string) {
    state.todo = todo;
  },

  SET_TODOS(state: TodoState, todos: string[]) {
    state.todos = todos;
  },
};
