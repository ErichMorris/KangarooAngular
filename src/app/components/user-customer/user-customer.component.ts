import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-user-customer',
  templateUrl: './user-customer.component.html',
  styleUrls: ['./user-customer.component.css']
})
export class UserCustomerComponent implements OnInit {

  userCustomerForm: FormGroup;

  constructor(private _customerService: CustomersService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.userCustomerForm = this._form.group({
      CustomerName: new FormControl,
      CustomerAddress: new FormControl,
      CustomerPhone: new FormControl,
      CustomerEmail: new FormControl
    });
  }

  onSubmit() {
    this._customerService.createCustomer(this.userCustomerForm.value).subscribe(data => {
      this._router.navigate(['/userRestaurant']);
    });
  }
}
