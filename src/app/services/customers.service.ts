import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/Customer';

const ApiUrl = "";

@Injectable()
export class CustomersService {

  constructor(private _http: HttpClient) { }

  getCustomer(id: string) {
    return this._http.get(`${ApiUrl}/Customers/${id}`, { headers: this.getHeaders() });
  }

  getCustomers() {
    return this._http.get(`${ApiUrl}/Customers`, { headers: this.getHeaders() });
  }

  createCustomer(customer: Customer) {
    return this._http.post(`${ApiUrl}/Customers`, customer, { headers: this.getHeaders()});
  }

  updateCustomer(customer: Customer) {
    return this._http.put(`${ApiUrl}/Customers`, customer, { headers: this.getHeaders() });
  }

  deleteCustomer(id: number) {
    return this._http.delete(`${ApiUrl}/Customers/${id}`, { headers: this.getHeaders() });
  }
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
