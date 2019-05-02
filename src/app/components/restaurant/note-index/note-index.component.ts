import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../../services/restaurants.service';
import { Restaurant} from '../../../models/Restaurant';

@Component({
  selector: 'app-note-index',
  templateUrl: './note-index.component.html',
  styleUrls: ['./note-index.component.css']
})
export class NoteIndexComponent implements OnInit {

  constructor(private _restaurantService: RestaurantsService) { }

  ngOnInit() {
    this._restaurantService.getRestaurants().subscribe((notes:Restaurant[]) => {});
  }

}
