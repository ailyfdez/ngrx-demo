import { createAction, props } from '@ngrx/store';

//save user action
export const saveUser = createAction(
  '[child comp] save user',
  props<{ user: string }>()
);

//get user action
export const getUser = createAction(
  '[child comp] get user'
);