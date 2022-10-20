import { Module } from "vuex";
import { RootState } from "../types";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { state } from "./state";

import { TodoState } from "./types";

export const index: Module<TodoState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
