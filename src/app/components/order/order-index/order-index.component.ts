import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { OrdersService } from 'src/app/services/orders.service';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-order-index',
  templateUrl: './order-index.component.html',
  styleUrls: ['./order-index.component.css']
})
export class OrderIndexComponent implements OnInit {

  constructor(private _orderService: OrdersService) { }

  ngOnInit() {
    this._orderService.getOrders().subscribe((orders: Order[]) => {
    });
  }
  columnNames = ['details', 'OrderId', 'Comments','CustomerName','CustomerAddress','MenuItemName','MenuItemPrice', 'buttons'];
  dataSource: MatTableDataSource<Order>;
}
