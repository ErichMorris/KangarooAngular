import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Order } from '../models/Order';

const ApiUrl ='https://kangaroofooddelivery.azurewebsites.net';

@Injectable()
 
export class OrdersService {

  constructor(private _http: HttpClient) { }

  getOrders() {
    return this._http.get(`${ApiUrl}/Orders`,{headers: this.getHeaders()});
  }

 createOrder(order:Order){
   return this._http.post(`${ApiUrl}/Orders`,order,{headers:this.getHeaders()});
 }
 getOrder(id:string){
  return this._http.get(`${ApiUrl}/Orders/${id}`,{headers:this.getHeaders()});
}

 updateOrder(order:Order){
   return this._http.put(`${ApiUrl}/Orders`,order,{headers:this.getHeaders()});
 }

 deleteOrder(id:number){
  return this._http.delete(`${ApiUrl}/Orders/${id}`,{headers:this.getHeaders()});
}

  private getHeaders(){
    return new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('id_token')}`);
  }
}
