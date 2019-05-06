import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { ActivatedRoute, Router } from '@angular/router';
import{Order} from 'src/app/models/Order';
 

@Component({
  selector: 'app-order-delete',
  templateUrl: './order-delete.component.html',
  styleUrls: ['./order-delete.component.css']
})
export class OrderDeleteComponent implements OnInit {
order:Order;
  constructor(private _orderService:OrdersService,private _ar:ActivatedRoute,private _router:Router) {
    this._ar.paramMap.subscribe(p=>{
      this._orderService.getOrder(p.get('id')).subscribe((singleOrder:Order)=>{
        this.order=singleOrder;
      });
    });
   }

  ngOnInit() {
  }

  onDelete(){
    this._orderService.deleteOrder(this.order.OrderId).subscribe(()=>{
      this._router.navigate(['/orders']);
    });
  }
}
