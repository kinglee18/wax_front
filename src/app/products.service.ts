import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {ApiResponse} from "../interfaces/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  configUrl = `${environment.api}/api/product?limit=5&sort=-1%2C%20name&page=1`;
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<ApiResponse>(this.configUrl);
  }
}
