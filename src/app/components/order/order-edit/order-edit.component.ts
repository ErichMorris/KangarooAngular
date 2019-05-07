import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Order } from 'src/app/models/Order';
import { OrdersService } from 'src/app/services/orders.service';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';


@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
order:Order;

editOrderForm:FormGroup;
  constructor(
    private _form:FormBuilder,
    private _orderService:OrdersService,
    private _ar:ActivatedRoute,
    private _router:Router)
   { 
     this._ar.paramMap.subscribe(p=>{
       this._orderService.getOrder(p.get('id')).subscribe((singleOrder :Order) =>{
         this.order= singleOrder;
         this.createForm();
       });
     });
   }

  ngOnInit() {
  }
 
createForm() {
  this.editOrderForm=this._form.group({
    OrderId: new FormControl(this.order.OrderId),
    Comments:new FormControl(this.order.Comments),
    CustomerId:new FormControl(this.order.CustomerId),
    CustomerName:new FormControl(this.order.CustomerName),
    CustomerAddress:new FormControl(this.order.CustomerAddress),
    MenuItemId:new FormControl(this.order.MenuItemId),
    MenuItemName:new FormControl(this.order.MenuItemName),
    MenuItemPrice:new FormControl(this.order.MenuItemPrice)
  });
}

onSubmit(form){
  const updateOrder:Order={
    OrderId:form.value.OrderId,
    Comments:form.value.Comments,
    MenuItemId:form.value.MenuItemId,
    MenuItemName:form.value.MenuItemName,
    MenuItemPrice:form.value.MenuItemPrice,
    CustomerId:form.value.CustomerId,
    CustomerName:form.value.CustomerName,
    CustomerAddress:form.value.CustomerAddress
  };
  this._orderService.updateOrder(updateOrder).subscribe(d=>{
    this._router.navigate(['/orders']);
  });

}

}
