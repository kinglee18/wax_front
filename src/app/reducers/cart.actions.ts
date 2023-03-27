import { createAction, props } from '@ngrx/store';
import {Product} from "../../interfaces/product";

export const loadProducts = createAction('[Cart] Load Cart Items');

export const loadProductsSuccess = createAction(
  '[Cart] Load Cart Items Success',
  props<{ Products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Cart] Load Cart Items Failure',
  props<{ errorMessage: string }>()
);

export const addProduct = createAction(
  '[Cart] Add Cart Item',
  props<{ Product: Product }>()
);

export const removeProduct = createAction(
  '[Cart] Remove Cart Item',
  props<{ id: string }>()
);

export const updateProductQuantity = createAction(
  '[Cart] Update Cart Item Quantity',
  props<{ id: string, quantity: number }>()
);
