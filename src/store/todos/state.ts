import { TodoState } from "./types";

export const state = (): TodoState => ({
  todo: "Test",
  todos: ["Eat", "Sleep"],
});
