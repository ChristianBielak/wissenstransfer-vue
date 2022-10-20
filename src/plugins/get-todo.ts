import type { RootState } from "@/store/types";
import type _Vue from "vue";
import type { Store } from "vuex";

export class GetTodoPlugin {
  public static install(
    Vue: typeof _Vue,
    { store }: { store: Store<RootState> }
  ) {
    Vue.prototype.$todos = store.state.todo?.todos;
  }
}
