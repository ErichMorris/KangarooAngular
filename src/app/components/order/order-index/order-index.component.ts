import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../../services/orders.service';
import {Order} from '../../../models/Order';
import { MatTableDataSource } from '@angular/material';
 

@Component({
  selector: 'app-order-index',
  templateUrl: './order-index.component.html',
  styleUrls: ['./order-index.component.css']
})
export class OrderIndexComponent implements OnInit {

  constructor(private _orderService: OrdersService) { }

  ngOnInit() {
    this._orderService.getOrders().subscribe((orders: Order [])=>{
this.dataSource=new MatTableDataSource<Order>(orders);
    } );
  }
  columnNames=['details','OrderId','Comments','buttons'];
  dataSource:MatTableDataSource<Order>
}
