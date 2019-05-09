import { Component, OnInit } from '@angular/core';
import { MenuItemsService } from '../../../services/menu-items.service';
import { MenuItem } from '../../../models/MenuItem';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-menu-item-index',
  templateUrl: './menu-item-index.component.html',
  styleUrls: ['./menu-item-index.component.css']
})
export class MenuItemIndexComponent implements OnInit {

  constructor(private _menuItemService: MenuItemsService) { }

  ngOnInit() {
    this._menuItemService.getMenuItems().subscribe((menuItems: MenuItem[]) => {
      this.dataSource = new MatTableDataSource<MenuItem>(menuItems);
    });
  }
  columnNames = ['details', 'MenuItemId', 'MenuItemName', 'Name', 'MenuItemPrice',
   'MenuItemDescription', 'MenuItemDescription', 'buttons'];
  dataSource: MatTableDataSource<MenuItem>;
}
