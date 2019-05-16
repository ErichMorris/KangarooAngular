import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/Customer';
import { APIURL } from '../../environments/environment.prod';



const ApiUrl = "https://kangaroodeliveryapi.azurewebsites.net/api";




@Injectable()
export class CustomersService {

  constructor(private _http: HttpClient) { }

  getCustomer(id: string) {
    return this._http.get(`${APIURL}/Customer/${id}`, { headers: this.getHeaders() });
  }

  getCustomers() {
    return this._http.get(`${APIURL}/Customer`, { headers: this.getHeaders() });
  }

  createCustomer(customer: Customer) {
    return this._http.post(`${APIURL}/Customer`, customer, { headers: this.getHeaders()});
  }

  updateCustomer(customer: Customer) {
    return this._http.put(`${APIURL}/Customer`, customer, { headers: this.getHeaders() });
  }

  deleteCustomer(id: number) {
    return this._http.delete(`${APIURL}/Customer/${id}`, { headers: this.getHeaders() });
  }
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
