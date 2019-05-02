import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';

const ApiUrl ='';


@Injectable()
  
export class RestaurantsService{

  constructor(private _http : HttpClient) { }

  getRestaurants() {
    return this._http.get(`${ApiUrl}/Restaurants`,{headers: this.getHeaders()});
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('id_token')}`);
  }
}
