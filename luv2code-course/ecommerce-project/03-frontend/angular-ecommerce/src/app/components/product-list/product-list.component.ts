import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html', // Using the product-list-GRID-componenet.html template
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  currentCategoryId: number;
  currentCategoryName: string;
  searchMode: boolean;


  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {

    // Check if this route has a keyword which indicates we are performing a manual search
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProducts(); // Search for Products
    }
    else {
      this.handleListProducts(); // Display List of Products

    }
  }


  handleSearchProducts() {

    // Get the keyword that user has entered in search bar
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    // Search for the product using the keyword
    this.productService.searchProducts(theKeyword).subscribe(
      data => {
        this.products = data;
      }
    );
  }


  handleListProducts() {

    // Check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // Get the 'id' param string and convert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');

      // Get the "name" param string
      this.currentCategoryName = this.route.snapshot.paramMap.get('name');
    }
    else {
      // Not category id available ... default to category id = 1, and name = book
      this.currentCategoryId = 1;
      this.currentCategoryName = 'Books';
    }

    // Get the products for this given category id
    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data; // Assign results to the Product array
      }
    )
  }

}
