import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';

  private categoryUrl = 'http://localhost:8080/api/product-category';

  constructor(private httpClient: HttpClient) // Inject the HttpClient
  {

  }

  // Maps the JSON data from Spring Data REST to Product array
  getProductList(theCategoryId: number): Observable<Product[]> { // Returns an Observable of Product array

    // Build URL based on category id
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe( // Use HttpClient to make GET request to baseUrl and pipe data being returned
      map(response => response._embedded.products) // Map the data to our given data type 
    );
  }

  // Maps the JSON data from Spring Data REST to ProductCategory array
  getProductCategories(): Observable<ProductCategory[]> {

    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe( // Use HttpClient to make GET request to baseUrl and pipe data being returned
      map(response => response._embedded.productCategory) // Map the data to our given data type 
    );
  }

}


// Supporting interface to help with mapping -> Unwraps the JSON from Spring Data REST's _embedded entry
interface GetResponseProducts {
  _embedded: {
    products: Product[];
  }
}


// Unwraps the JSON from Spring Data REST's _embedded entry
interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }
}
