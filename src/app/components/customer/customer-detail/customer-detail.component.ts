import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})

export class CustomerDetailComponent implements OnInit {

  customer: Customer;
  
  constructor(private _activatedRoute: ActivatedRoute, private _customerService: CustomersService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._customerService.getCustomer(routeData.get('id')).subscribe((singleCustomer: Customer) => {
        this.customer = singleCustomer;
      });
    });
  }

}