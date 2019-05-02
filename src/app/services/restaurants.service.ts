import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Restaurant } from '../models/Restaurant';

const ApiUrl ='';


@Injectable()
  
export class RestaurantsService{

  constructor(private _http : HttpClient) { }

  getRestaurants() {
    return this._http.get(`${ApiUrl}/Restaurants`,{headers: this.getHeaders()});
  }

  createRestaurant(restaurant :Restaurant){
    return this._http.post(`${ApiUrl}/Restaurants`,restaurant,{headers:this.getHeaders()});
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('id_token')}`);
  }
}
