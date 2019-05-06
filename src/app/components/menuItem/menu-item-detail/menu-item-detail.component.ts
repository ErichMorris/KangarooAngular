import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'src/app/models/MenuItem';
import { MenuItemsService } from 'src/app/services/menu-items.service';

@Component({
  selector: 'app-menu-item-detail',
  templateUrl: './menu-item-detail.component.html',
  styleUrls: ['./menu-item-detail.component.css']
})
export class MenuItemDetailComponent implements OnInit {

  menuItem: MenuItem;
  
  constructor(private _activatedRoute: ActivatedRoute, private _menuItemService: MenuItemsService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._menuItemService.getMenuItem(routeData.get('id')).subscribe((singleMenuItem: MenuItem) => {
        this.menuItem = singleMenuItem;
      });
    });
  }

}