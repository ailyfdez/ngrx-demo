import { createReducer, on } from '@ngrx/store';
import { saveUser } from './chilld.action'

// state interface
export interface ChildState {
    user: string
}

//initial state object
export const initialState: ChildState = {
    user: "Nahuel"
};

export const childReducer = createReducer(
    initialState,
    on(saveUser, (state, { user }) => ({
        ...state,
        user
    })),
);

export function reducer(state: any, action: any) {
    return childReducer(state, action);
}