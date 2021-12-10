import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { getAmount, saveAmount } from './chilld.action'
import { ChildService } from './child.service';

@Injectable()
export class ChildEffects {
    loadUserName$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getAmount),
            mergeMap(() => this.childService.getAmount()
                .pipe(map(value => saveAmount({ amount: value })))),
            catchError((error) => { console.log(error); return EMPTY })
        )
    );

    constructor(
        private actions$: Actions,
        private childService: ChildService
    ) { }
}