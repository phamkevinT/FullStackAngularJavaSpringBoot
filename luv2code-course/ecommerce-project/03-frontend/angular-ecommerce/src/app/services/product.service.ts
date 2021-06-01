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

  getProduct(theProductId: number): Observable<Product> {

    // Build the URL based on product id
    const productUrl = `${this.baseUrl}/${theProductId}`;

    return this.httpClient.get<Product>(productUrl);
  }


  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe( // Use HttpClient to make GET request to baseUrl and pipe data being returned
      map(response => response._embedded.products) // Map the data to our given data type 
    );
  }


  // Search and display products based on user's keyword
  searchProducts(theKeyword: string): Observable<Product[]> {

    // Build URL based on keyword
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    return this.getProducts(searchUrl);
  }


  // Maps the JSON data from Spring Data REST to Product array
  getProductList(theCategoryId: number): Observable<Product[]> { // Returns an Observable of Product array

    // Build URL based on category id
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.getProducts(searchUrl);
  }


  getProductListPaginate(thePage: number,
    thePageSize: number,
    theCategoryId: number): Observable<GetResponseProducts> {

    // Build URL based on category id, page and size
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }


  // Maps the JSON data from Spring Data REST to ProductCategory array
  getProductCategories(): Observable<ProductCategory[]> {

    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe( // Use HttpClient to make GET request to baseUrl and pipe data being returned
      map(response => response._embedded.productCategory) // Map the data to our given data type 
    );
  }


  searchProductsPaginate(thePage: number,
                        thePageSize: number,
                        theKeyword: string): Observable<GetResponseProducts> {

    // Build URL based on theKeyword, page, and page size
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }

}


// Supporting interface to help with mapping -> Unwraps the JSON from Spring Data REST's _embedded entry
interface GetResponseProducts {
  _embedded: {
    products: Product[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}


// Unwraps the JSON from Spring Data REST's _embedded entry
interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }
}
