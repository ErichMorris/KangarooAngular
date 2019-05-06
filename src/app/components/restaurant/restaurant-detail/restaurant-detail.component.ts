import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Restaurant } from 'src/app/models/Restaurant';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

restaurant:Restaurant;

  constructor(private _activatedRoute: ActivatedRoute, private _restaurantService:RestaurantsService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData =>{
     this._restaurantService.getRestaurant(routeData.get('id')).subscribe((singleRestaurant:Restaurant)=>{
this.restaurant=singleRestaurant;
     });
    });
  }

}
