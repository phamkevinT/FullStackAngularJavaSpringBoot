import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }

  // GET request to baseUrl and wrap the data
  // Map the JSON data from Spring Data REST to Product array
  getProductList(): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
      );
  }
}

// Unwraps the JSON from Spring Data REST _embedded entry
// Make data available as Product array
interface GetResponse {
  _embedded: {
    products: Product[];
  }

}