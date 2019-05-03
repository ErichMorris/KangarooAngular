import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/Restaurant';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']
})
export class RestaurantEditComponent implements OnInit {

restaurant: Restaurant;

 editRestaurantForm :FormGroup;
  constructor(private _form:FormBuilder,
    private _restaurantService:RestaurantsService,
    private _ar: ActivatedRoute,
    private _router:Router) { 

      this._ar.paramMap.subscribe(p =>{
        this._restaurantService.getRestaurant(p.get('id')).subscribe((singleRestaurant: Restaurant) =>{
        this.restaurant = singleRestaurant;
        this.createForm();
        
      });
    });
  }
  ngOnInit() {
  }

  createForm(){
    this.editRestaurantForm=this._form.group({
      RestaurantId: new FormControl(this.restaurant.RestaurantId),
      Name: new FormControl (this.restaurant.Name),
      Address: new FormControl(this.restaurant.Address),
      Description: new FormControl(this.restaurant.Description),
      ContactNumber: new FormControl(this.restaurant.ContactNumber),
      ContactEmail:new FormControl(this.restaurant.ContactEmail),
      Rating: new FormControl(this.restaurant.Rating),
    });
  }

  onSubmit(form){
    const updateRestaurant: Restaurant={
      RestaurantId:form.value.RestaurantId,
      Name:form.value.Name,
      Address:form.value.Address,
      Description:form.value.Description,
      ContactNumber:form.value.ContactNumber,
      ContactEmail:form.value.ContactEmail,
      Rating:form.value.Rating
    };

    this._restaurantService.updateRestaurant(updateRestaurant).subscribe(d=>{
this._router.navigate(['/restaurants']);
    });
  }
}
