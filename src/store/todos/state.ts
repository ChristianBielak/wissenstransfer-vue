import { TodoState } from "./types";

export const state = (): TodoState => ({
  todo: "",
  todos: [],
});
