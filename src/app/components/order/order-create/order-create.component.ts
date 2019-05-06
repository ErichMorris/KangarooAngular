import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../../services/orders.service';
import {FormBuilder,FormGroup,FormControl} from '@angular/forms';
import {Router} from '@angular/router';



@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {
orderForm:FormGroup;
  constructor(private _orderService:OrdersService,private _form :FormBuilder,private _router:Router) { 
    this.createForm();
  }

  ngOnInit() {
  }

createForm() {
this.orderForm=this._form.group({
  Comments:new FormControl,
});
}

onSubmit(){
  this._orderService.createOrder(this.orderForm.value).subscribe(data=>{
    this._router.navigate(['/orders']);
  });
}

}