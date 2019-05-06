import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../../services/restaurants.service';
import { Restaurant } from '../../../models/Restaurant';
import {  MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-restaurant-index',
  templateUrl: './restaurant-index.component.html',
  styleUrls: ['./restaurant-index.component.css']
})
export class RestaurantIndexComponent implements OnInit {

  constructor(private _restaurantService: RestaurantsService)  { }

  ngOnInit() {
   this._restaurantService.getRestaurants().subscribe((restaurants: Restaurant[]) => {
   
   });
  }
 columnNames =['details' , 'RestaurantId' , 'Name','Address','Description','ContactNumber','ContactEmail','Rating','button'];
 dataSource:MatTableDataSource<Restaurant>
}
