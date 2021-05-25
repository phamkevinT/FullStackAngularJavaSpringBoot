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

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {

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
