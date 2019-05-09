import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MenuItem } from '../models/MenuItem';


const ApiUrl = "https://kangaroodelivery.azurewebsites.net/api";


@Injectable()
export class MenuItemsService {

  constructor(private _http: HttpClient) { }

  getMenuItem(id: string) {
    return this._http.get(`${ApiUrl}/MenuItem/${id}`, { headers: this.getHeaders() });
  }

  getMenuItems() {
    return this._http.get(`${ApiUrl}/MenuItem`, { headers: this.getHeaders() });
  }

  createMenuItem(menuItem: MenuItem) {
    return this._http.post(`${ApiUrl}/MenuItem`, menuItem, { headers: this.getHeaders()});
  }

  updateMenuItem(menuItem: MenuItem) {
    return this._http.put(`${ApiUrl}/MenuItem`, menuItem, { headers: this.getHeaders() });
  }

  deleteMenuItem(id: number) {
    return this._http.delete(`${ApiUrl}/MenuItem/${id}`, { headers: this.getHeaders() });
  }
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}