import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../../services/customers.service';
import { Customer } from '../../../models/Customer';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-customer-index',
  templateUrl: './customer-index.component.html',
  styleUrls: ['./customer-index.component.css']
})
export class CustomerIndexComponent implements OnInit {

  constructor(private _customerService: CustomersService) { }

  ngOnInit() {
    this._customerService.getCustomers().subscribe((customers: Customer[]) => {
      this.dataSource = new MatTableDataSource<Customer>(customers);
    });
  }
  columnNames = ['details', 'CustomerId', 'CustomerName', 'CustomerAddress',
   'CustomerPhone', 'CustomerEmail', 'buttons'];
  dataSource: MatTableDataSource<Customer>;
}
