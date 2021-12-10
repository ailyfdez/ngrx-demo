import { Component } from '@angular/core';
import { ChildSelectors } from '../child/child.selector';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
})
export class ParentComponent {
  amount: number = 0;

  constructor(private childSelector: ChildSelectors) {

  }
  
  ngOnInit() {
    this.childSelector.amount$.subscribe(value => {
      this.amount = value;
    });
  }
}
