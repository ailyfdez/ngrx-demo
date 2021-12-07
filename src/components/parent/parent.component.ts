import { Component } from '@angular/core';
import { ChildSelectors } from '../child/child.selector';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
})
export class ParentComponent {
  userName: string = "";

  constructor(private childSelector: ChildSelectors) {

  }
  
  ngOnInit() {
    this.childSelector.user$.subscribe(name => {
      this.userName = name;
    });
  }
}
