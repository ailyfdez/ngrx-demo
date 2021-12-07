import { Injectable } from '@angular/core';
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';

import { initialState, ChildState } from './child.reducer';

//select feature state
const getChildState = createFeatureSelector<ChildState>('child');

// select specific property from feature state
const getUser = createSelector(getChildState, (state: ChildState) => (state ? state.user : initialState.user));

@Injectable()
export class ChildSelectors {
  constructor(private store: Store<ChildState>) { }

  get user$() {
    return this.store.select(getUser);
  }
}