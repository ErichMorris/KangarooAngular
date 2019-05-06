import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'src/app/models/MenuItem';
import { MenuItemsService } from 'src/app/services/menu-items.service';

@Component({
  selector: 'app-menu-item-delete',
  templateUrl: './menu-item-delete.component.html',
  styleUrls: ['./menu-item-delete.component.css']
})
export class MenuItemDeleteComponent implements OnInit {

  menuItem: MenuItem;

  constructor(private _menuItemService: MenuItemsService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._menuItemService.getMenuItem(p.get('id')).subscribe((singleMenuItem: MenuItem) => {
        this.menuItem = singleMenuItem;
      });
    });
   }

  ngOnInit() {
  }

  onDelete() {
    this._menuItemService.deleteMenuItem(this.menuItem.MenuItemId).subscribe(() => {
      this._router.navigate(['/menuItems']);
    });
  }
}
