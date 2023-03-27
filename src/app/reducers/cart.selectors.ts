import { createSelector } from '@ngrx/store';
import {AppState} from "./app.state";
import {CartState} from "./cart.reducer";

export const selectProducts = (state: AppState) => state.products;

export const selectAllTodos = createSelector(
  selectProducts,
  (state: CartState) => state.products
);
