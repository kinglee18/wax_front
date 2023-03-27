import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as CartActions from './cart.actions';
import {Product} from "../../interfaces/product";

export interface CartState extends EntityState<Product> {
  products: Product[],
  isLoading: boolean;
  errorMessage: string;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: CartState = adapter.getInitialState({
  products: [],
  isLoading: false,
  errorMessage: ''
});

export const cartReducer = createReducer(
  initialState,
  on(CartActions.loadProducts, (state) => ({
    ...state,
    isLoading: true
  })),
  on(CartActions.loadProductsSuccess, (state, { Products }) => adapter.setAll(Products, {
    ...state,
    isLoading: false
  })),
  on(CartActions.loadProductsFailure, (state, { errorMessage }) => ({
    ...state,
    isLoading: false,
    errorMessage
  })),
  on(CartActions.addProduct, (state, { Product }) => ({
  ...state,
    products: [...state.products, Product],
  })),
  on(CartActions.removeProduct, (state, { id }) => adapter.removeOne(id, state)),
  on(CartActions.updateProductQuantity, (state, { id, quantity }) => adapter.updateOne({ id: id, changes: { quantity: quantity } }, state))
);
