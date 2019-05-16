import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Restaurant } from '../models/Restaurant';
import { APIURL } from '../../environments/environment.prod';



const ApiUrl ='https://kangaroodeliveryapi.azurewebsites.net/api';




@Injectable()
  
export class RestaurantsService{

  constructor(private _http : HttpClient) { }

  getRestaurants() {
    return this._http.get(`${APIURL}/Restaurant`,{headers: this.getHeaders()});
  }

  createRestaurant(restaurant :Restaurant){
    return this._http.post(`${APIURL}/Restaurant`,restaurant,{headers:this.getHeaders()});
  }

  getRestaurant(id:string){
    return this._http.get(`${APIURL}/Restaurant/${id}`,{headers:this.getHeaders()});
  }

  updateRestaurant(restaurant: Restaurant){
    return this._http.put(`${APIURL}/Restaurant`,restaurant,{headers:this.getHeaders() });
  }

  deleteRestaurant(id:number){
    return this._http.delete(`${APIURL}/Restaurant/${id}`,{headers:this.getHeaders()});
  }
  private getHeaders(){
    return new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('id_token')}`);
  }
}
