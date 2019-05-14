import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { Restaurant } from 'src/app/models/Restaurant';

@Component({
  selector: 'app-user-restaurant',
  templateUrl: './user-restaurant.component.html',
  styleUrls: ['./user-restaurant.component.css']
})
export class UserRestaurantComponent implements OnInit {

  constructor(private _userRestaurantService: RestaurantsService) { }

  ngOnInit() {
    this._userRestaurantService.getRestaurants().subscribe((restaurants: Restaurant[]) => {
      this.dataSource = new MatTableDataSource<Restaurant>(restaurants); 
    });
  }
  columnNames = ['Name', 'Address', 'ContactNumber', 'Rating', 'buttons'];
  dataSource: MatTableDataSource<Restaurant>;
}
