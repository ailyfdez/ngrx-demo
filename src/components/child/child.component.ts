import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as childReducer from './child.reducer';
import * as childAction from './chilld.action';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  constructor(private store: Store<childReducer.ChildState>) { }

  dispatchUser() {
    this.store.dispatch(childAction.getUser());
  }
}