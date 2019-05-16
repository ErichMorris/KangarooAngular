import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Order } from '../models/Order';
import { APIURL } from '../../environments/environment.prod';


const ApiUrl ='https://kangaroodeliveryapi.azurewebsites.net/api';


@Injectable()
 
export class OrdersService {

  constructor(private _http: HttpClient) { }

  getOrders() {
    return this._http.get(`${APIURL}/Order`,{headers: this.getHeaders()});
  }

 createOrder(order:Order){
   return this._http.post(`${APIURL}/Order`,order,{headers:this.getHeaders()});
 }
 getOrder(id:string){
  return this._http.get(`${APIURL}/Order/${id}`,{headers:this.getHeaders()});
}

 updateOrder(order:Order){
   return this._http.put(`${APIURL}/Order`,order,{headers:this.getHeaders()});
 }

 deleteOrder(id:number){
  return this._http.delete(`${APIURL}/Order/${id}`,{headers:this.getHeaders()});
}

  private getHeaders(){
    return new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('id_token')}`);
  }
}
