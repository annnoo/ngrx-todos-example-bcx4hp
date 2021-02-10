import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { Add } from "./actions";
@Injectable()
export class MovieEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Todo Component] AddRequest"),
      mergeMap((action: { text: string }) => {
        console.log("Hier z.B. API Call...");
        return of(Add({ text: action.text }));
        //return EMPTY;
      })
    )
  );

  constructor(private actions$: Actions) {}
}
