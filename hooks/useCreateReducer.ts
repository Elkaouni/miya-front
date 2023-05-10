import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { scan } from 'rxjs/operators';


// Extracts property names from initial state of reducer to allow typesafe dispatch objects
export type FieldNames<T> = {
  [K in keyof T]: T[K] extends string ? K : K;
}[keyof T];

// Returns the Action Type for the dispatch object to be used for typing in things like context
export type ActionType<T> =
  | { type: 'reset' }
  | { type?: 'change'; field: FieldNames<T>; value: any };


  export interface ReducerState<T> {
    state: T;
    dispatch: (action: ActionType<T>) => void;
  }
  
  @Injectable({
    providedIn: 'root'
  })

  export class CreateReducerService {
    createReducer<T>(initialState: T): ReducerState<T> {
      const state$ = new BehaviorSubject(initialState);

      const dispatch = (action: ActionType<T>) => {
        if (!action.type) {
          const newState = { ...state$.value, [action.field]: action.value };
          state$.next(newState);
        } else if (action.type === 'reset') {
          state$.next(initialState);
        } else {
          throw new Error();
        }
      };

      state$.next(initialState);
      return {
        state: state$.value,
        dispatch: dispatch
      };
    }
  }
