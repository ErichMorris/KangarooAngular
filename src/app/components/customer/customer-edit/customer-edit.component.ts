import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CustomersService } from 'src/app/services/customers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer: Customer;

  editCustomerForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _customerService: CustomersService,
              private _ar: ActivatedRoute,
              private _router: Router) {

    this._ar.paramMap.subscribe(p => {
      this._customerService.getCustomer(p.get('id')).subscribe((singleCustomer: Customer) => {
        this.customer = singleCustomer;
        this.createForm();
      });
    });
  }
  ngOnInit() {
  }

  createForm() {
    this.editCustomerForm = this._form.group({
      CustomerId: new FormControl(this.customer.CustomerId),
      CustomerName: new FormControl(this.customer.CustomerName),
      CustomerAddress: new FormControl(this.customer.CustomerAddress),
      CustomerPhone: new FormControl(this.customer.CustomerPhone),
      CustomerEmail: new FormControl(this.customer.CustomerEmail)
    });
  }

  onSubmit(form) {
    const updateCustomer: Customer = {
      CustomerId: form.value.CustomerId,
      CustomerName: form.value.CustomerName,
      CustomerAddress: form.value.CustomerAddress,
      CustomerPhone: form.value.CustomerPhone,
      CustomerEmail: form.value.CustomerEmail
    };
    this._customerService.updateCustomer(updateCustomer).subscribe(d => {
      this._router.navigate(['/customers']);
    });
  }
}