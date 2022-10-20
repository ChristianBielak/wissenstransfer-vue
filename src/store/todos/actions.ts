import { Commit } from "vuex";

export const actions = {
  addTodo({ commit }: { commit: Commit }, todo: string) {
    commit("ADD_TODO", todo);
  },
};
