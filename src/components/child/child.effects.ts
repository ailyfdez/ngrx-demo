import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { getUser, saveUser } from './chilld.action'
import { ChildService } from './child.service';

@Injectable()
export class ChildEffects {
    loadUserName$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getUser),
            mergeMap(() => this.childService.getUser()
                .pipe(map(name => saveUser({ user: name })))),
            catchError((error) => { console.log(error); return EMPTY })
        )
    );

    constructor(
        private actions$: Actions,
        private childService: ChildService
    ) { }
}