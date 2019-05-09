import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { Restaurant } from 'src/app/models/Restaurant';

@Component({
  selector: 'app-restaurant-index',
  templateUrl: './restaurant-index.component.html',
  styleUrls: ['./restaurant-index.component.css']
})
export class RestaurantIndexComponent implements OnInit {

  constructor(private _restaurantService: RestaurantsService) { }

  ngOnInit() {
    this._restaurantService.getRestaurants().subscribe((restaurants: Restaurant[]) => {
      this.dataSource = new MatTableDataSource<Restaurant>(restaurants); 
    });
  }
  columnNames = ['details', 'RestaurantId', 'Name', 'Address',
   'Description', 'ContactNumber', 'ContactEmail', 'Rating', 'buttons'];
  dataSource: MatTableDataSource<Restaurant>;
}
