import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

const ApiUrl ='';

@Injectable()
 
export class OrdersService {

  constructor(private _http: HttpClient) { }

  getOrders() {
    return this._http.get(`${ApiUrl}/Orders`,{headers: this.getHeaders()});
  }

 

  private getHeaders(){
    return new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('id_token')}`);
  }
}
