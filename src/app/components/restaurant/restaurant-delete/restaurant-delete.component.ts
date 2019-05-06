import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/models/Restaurant';

@Component({
  selector: 'app-restaurant-delete',
  templateUrl: './restaurant-delete.component.html',
  styleUrls: ['./restaurant-delete.component.css']
})
export class RestaurantDeleteComponent implements OnInit {
  restaurant: Restaurant;

  constructor(private _restaurantService:RestaurantsService,private _ar:ActivatedRoute,private _router:Router) {
    this._ar.paramMap.subscribe(p=>{
      this._restaurantService.getRestaurant(p.get('id')).subscribe((singleRestaurant:Restaurant)=>{
this.restaurant=singleRestaurant;
      });
    });
   }

  ngOnInit() {
  }

  onDelete(){
    this._restaurantService.deleteRestaurant(this.restaurant.RestaurantId).subscribe(()=>{
      this._router.navigate(['/restaurants']);
    });
  }
}
