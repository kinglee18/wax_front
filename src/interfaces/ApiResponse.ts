import {Product} from "./product";

export interface ApiResponse {
  type: string;
  message: string;
  products: Product[];
}
