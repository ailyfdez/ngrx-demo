import { Injectable } from '@angular/core';
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';

import { initialState, BankAccountState } from './child.reducer';

//select feature state
const getBankAccountState = createFeatureSelector<BankAccountState>('bank account');

// select specific property from feature state
const getAmount = createSelector(getBankAccountState, (state: BankAccountState) => (state ? state.amount : initialState.amount));

@Injectable()
export class ChildSelectors {
  constructor(private store: Store<BankAccountState>) { }

  get amount$() {
    return this.store.select(getAmount);
  }
}