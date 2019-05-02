import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = ''

@Injectable()
export class MenuItemService {

  constructor(private _http: HttpClient) { }

  getMenuItems(){
    return this._http.get(`${ApiUrl}/MenuItems` ,  { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
