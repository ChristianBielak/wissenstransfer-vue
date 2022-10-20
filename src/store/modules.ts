import { ModuleTree } from "vuex";
import type { RootState } from "@/store/types";
import { index as todo } from "./todos";
export const modules: ModuleTree<RootState> = {
  todo,
};
