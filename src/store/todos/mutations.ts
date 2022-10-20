import { TodoState } from "./types";

export const mutations = {
  SET_TODO(state: TodoState, todo: string) {
    state.todo = todo;
  },
  ADD_TODO(state: TodoState, todo: string) {
    state.todos.push(todo);
  },
};
