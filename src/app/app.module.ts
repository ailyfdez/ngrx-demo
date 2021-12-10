import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from '../components/parent/parent.component';
import { ChildComponent } from '../components/child/child.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { childReducer } from '../components/child/child.reducer';
import { ChildSelectors } from '../components/child/child.selector';
import { ChildEffects } from '../components/child/child.effects';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    StoreModule.forRoot({ 'bank account': childReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([ChildEffects]),
  ],
  providers: [ChildSelectors],
  bootstrap: [AppComponent]
})
export class AppModule { }
