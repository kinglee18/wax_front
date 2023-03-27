import {Component, Input, OnInit} from '@angular/core';
import {addProduct, loadProducts} from "../reducers/cart.actions";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.sass']
})
export class CardProductComponent  implements OnInit {
  public cartItems$= this.store.select(state => {
    return state.cart.products
  });

  loading$: Observable<boolean> | undefined;
  error$: Observable<string> | undefined;

  @Input() product!: Product
  constructor(private store: Store<{ cart: { products: Product[], loading: boolean, error: string } }>) { }


  addItemToCart(Product: Product): void {
    this.store.dispatch(addProduct({ Product }));
  }

  ngOnInit(): void {
  }
}




