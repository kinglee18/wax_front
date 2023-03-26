import {Component, Input} from '@angular/core';
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.sass']
})
export class CardProductComponent {
  @Input() product!: Product
}
