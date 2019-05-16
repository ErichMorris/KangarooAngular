import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MenuItem } from '../models/MenuItem';
import { APIURL } from '../../environments/environment.prod';


const ApiUrl = "https://kangaroodeliveryapi.azurewebsites.net/api";


@Injectable()
export class MenuItemsService {

  constructor(private _http: HttpClient) { }

  getMenuItem(id: string) {
    return this._http.get(`${APIURL}/MenuItem/${id}`, { headers: this.getHeaders() });
  }

  getMenuItems() {
    return this._http.get(`${APIURL}/MenuItem`, { headers: this.getHeaders() });
  }

  createMenuItem(menuItem: MenuItem) {
    return this._http.post(`${APIURL}/MenuItem`, menuItem, { headers: this.getHeaders()});
  }

  updateMenuItem(menuItem: MenuItem) {
    return this._http.put(`${APIURL}/MenuItem`, menuItem, { headers: this.getHeaders() });
  }

  deleteMenuItem(id: number) {
    return this._http.delete(`${APIURL}/MenuItem/${id}`, { headers: this.getHeaders() });
  }
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}