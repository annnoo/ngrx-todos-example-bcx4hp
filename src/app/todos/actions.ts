import { createAction, props } from "@ngrx/store";

export const AddRequest = createAction(
  "[Todo Component] AddRequest",
  props<{ text: string }>()
);
export const Add = createAction(
  "[Todo Component] Add",
  props<{ text: string }>()
);
export const Remove = createAction(
  "[Todo Component] Remove",
  props<{ id: string }>()
);
export const Toggle = createAction(
  "[Todo Component] Toggle",
  props<{ id: string }>()
);
