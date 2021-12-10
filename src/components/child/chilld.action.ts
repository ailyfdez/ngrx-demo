import { createAction, props } from '@ngrx/store';

//get amount action
export const getAmount = createAction(
  '[Bank account] get amount'
);

//save amount action
export const saveAmount = createAction(
  '[Bank account] save amount',
  props<{ amount: number }>()
);

