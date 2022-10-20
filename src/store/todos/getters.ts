import { TodoState } from "./types";

export const getters = {
  getTodo: (state: TodoState) => (index: number) => state.todos[index],
};
