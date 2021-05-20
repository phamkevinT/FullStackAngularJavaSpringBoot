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

  constructor(private httpClient: HttpClient) // Inject the HttpClient
  {

  }

  // Maps the JSON data from Spring Data REST to Product array
  getProductList(): Observable<Product[]> { // Returns an Observable of Product array
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe( // Use HttpClient to make GET request to baseUrl and pipe data being returned
      map(response => response._embedded.products) // Map the data to our given data type 
    );
  }
}

// Supporting interface to help with mapping -> Unwraps the JSON from Spring Data REST's _embedded entry
interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
