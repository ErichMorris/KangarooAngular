import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Restaurant } from '../models/Restaurant';


const ApiUrl ='https://kangaroofooddelivery.azurewebsites.net';



@Injectable()
  
export class RestaurantsService{

  constructor(private _http : HttpClient) { }

  getRestaurants() {
    return this._http.get(`${ApiUrl}/Restaurants`,{headers: this.getHeaders()});
  }

  createRestaurant(restaurant :Restaurant){
    return this._http.post(`${ApiUrl}/Restaurants`,restaurant,{headers:this.getHeaders()});
  }

  getRestaurant(id:string){
    return this._http.get(`${ApiUrl}/Restaurants/${id}`,{headers:this.getHeaders()});
  }

  updateRestaurant(restaurant: Restaurant){
    return this._http.put(`${ApiUrl}/Restaurants`,restaurant,{headers:this.getHeaders() });
  }

  deleteRestaurant(id:number){
    return this._http.delete(`${ApiUrl}/Restaurants/${id}`,{headers:this.getHeaders()});
  }
  private getHeaders(){
    return new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('id_token')}`);
  }
}
