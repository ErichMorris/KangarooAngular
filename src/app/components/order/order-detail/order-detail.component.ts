import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Order } from 'src/app/models/Order';
import { OrdersService } from 'src/app/services/orders.service';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
order:Order;
  constructor(private _activatedRoute:ActivatedRoute,private _orderService:OrdersService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData =>{
      this._orderService.getOrder(routeData.get('id')).subscribe((singleOrder:Order)=>{
        this.order=singleOrder;
      });
    });
  }

}
