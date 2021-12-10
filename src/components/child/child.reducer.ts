import { createReducer, on } from '@ngrx/store';
import { saveAmount } from './chilld.action'

// state interface
export interface BankAccountState {
    amount: number
}

//initial state object
export const initialState: BankAccountState = {
    amount: 0
};

export const childReducer = createReducer(
    initialState,
    on(saveAmount, (state, { amount }) => ({
        ...state,
        amount
    })),
);

export function reducer(state: any, action: any) {
    return childReducer(state, action);
}