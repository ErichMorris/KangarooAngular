import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MenuItemsService } from 'src/app/services/menu-items.service';
import { MenuItem } from 'src/app/models/MenuItem';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  constructor(private _menuItemService: MenuItemsService) { }

  ngOnInit() {
    this._menuItemService.getMenuItems().subscribe((menuItems: MenuItem[]) => {
      this.dataSource = new MatTableDataSource<MenuItem>(menuItems);
    });
  }
  columnNames = ['details', 'MenuItemId', 'MenuItemName', 'Name', 'MenuItemPrice',
   'MenuItemDescription', 'MenuItemPicture', 'buttons'];
  dataSource: MatTableDataSource<MenuItem>;
}
