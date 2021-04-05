import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of sales person objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Kevin", "Pham", "kevin.pham@email.com", 50000),
    new SalesPerson("Alex", "Tran", "alex.tran@email.com", 40000),
    new SalesPerson("Richard", "Tien", "richard.tien@email.com", 90000),
    new SalesPerson("Josh", "Dizon", "josh.dizon@email.com", 70000)
  ];
    
  constructor() { }

  ngOnInit(): void {
  }

}
