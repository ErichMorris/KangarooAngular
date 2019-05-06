import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Order } from 'src/app/models/Order';
import { OrdersService } from 'src/app/services/orders.service';
import { ActivatedRoute, Router } from '@angular/router';


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
    Comments:new FormControl(this.order.Comments)
  });
}

onSubmit(form){
  const updateOrder:Order={
    OrderId:form.value.OrderId,
    Comments:form.value.Comments
  };
  this._orderService.updateOrder(updateOrder).subscribe(d=>{
    this._router.navigate(['/orders']);
  });

}

}
