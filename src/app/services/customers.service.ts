import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/Customer';


const ApiUrl = "https://kangaroodelivery.azurewebsites.net/api";


@Injectable()
export class CustomersService {

  constructor(private _http: HttpClient) { }

  getCustomer(id: string) {
    return this._http.get(`${ApiUrl}/Customer/${id}`, { headers: this.getHeaders() });
  }

  getCustomers() {
    return this._http.get(`${ApiUrl}/Customer`, { headers: this.getHeaders() });
  }

  createCustomer(customer: Customer) {
    return this._http.post(`${ApiUrl}/Customer`, customer, { headers: this.getHeaders()});
  }

  updateCustomer(customer: Customer) {
    return this._http.put(`${ApiUrl}/Customer`, customer, { headers: this.getHeaders() });
  }

  deleteCustomer(id: number) {
    return this._http.delete(`${ApiUrl}/Customer/${id}`, { headers: this.getHeaders() });
  }
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
