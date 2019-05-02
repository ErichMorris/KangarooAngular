import { Component, OnInit } from '@angular/core';
import { MenuItemService } from '../../../services/menuItems.service';
import { MenuItem } from '../../../models/MenuItem';

@Component({
  selector: 'app-menu-item-index',
  templateUrl: './menu-item-index.component.html',
  styleUrls: ['./menu-item-index.component.css']
})
export class MenuItemIndexComponent implements OnInit {

  constructor(private _menuItemsService: MenuItemService) { }

  ngOnInit() {
    this._menuItemsService.getMenuItems().subscribe((MenuItems: MenuItem[]) => {});
  }

}
