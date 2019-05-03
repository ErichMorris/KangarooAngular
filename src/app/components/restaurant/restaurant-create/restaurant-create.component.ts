import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../../services/restaurants.service';
import { FormBuilder,FormGroup , FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: ['./restaurant-create.component.css']
})
export class RestaurantCreateComponent implements OnInit {

 restaurantForm: FormGroup;

  constructor(private _restaurantService: RestaurantsService,private _form:FormBuilder,private _router:Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.restaurantForm = this._form.group({
      Name: new FormControl,
      Address : new FormControl,
      Description : new FormControl,
      ContactNumber : new FormControl,
      ContactEmail : new FormControl,
      Rating : new FormControl
    });
  }

  onSubmit(){
    this._restaurantService.createRestaurant(this.restaurantForm.value).subscribe(data => {
      this._router.navigate(['/restaurants']);
    });
  }
}
