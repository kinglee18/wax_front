import { Component } from '@angular/core';
import {ProductsService} from "../products.service";
import {ApiResponse} from "../../interfaces/ApiResponse";

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.sass']
})
export class HomeProductsComponent {
  constructor(private productsService: ProductsService) {
  }
  productResponse: ApiResponse | undefined;

  fetchProducts() {
    this.productsService.getProducts()
      .subscribe((data: ApiResponse) => this.productResponse = {
        products: data.products,
        message: data.message,
        type: data.type
      });
  }
  ngOnInit() {
  this.fetchProducts()
  }
}
