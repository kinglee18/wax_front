import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Store} from "@ngrx/store";
import {Product} from "../../interfaces/product";
import {CartState} from "../reducers/cart.reducer";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  constructor(private store: Store<{ cart: CartState }>) { }

  public cartItems$= this.store.select(state => {
    return state.cart.products
  });
  cartProductsLength$ = this.cartItems$.pipe(
    map(array => array.length)
  );
}
