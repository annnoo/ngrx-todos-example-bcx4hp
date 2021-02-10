import { createSelector, State } from "@ngrx/store";
import { Todo } from "./interfaces";

export const selectTodoState = (state: { todoState: Todo[] }) =>
  state.todoState;

export const selectFeatureCount = createSelector(
  selectTodoState,
  (state: Todo[]) => state.length
);
