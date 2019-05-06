import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'src/app/models/MenuItem';
import { MenuItemsService } from 'src/app/services/menu-items.service';

@Component({
  selector: 'app-menu-item-edit',
  templateUrl: './menu-item-edit.component.html',
  styleUrls: ['./menu-item-edit.component.css']
})
export class MenuItemEditComponent implements OnInit {

  menuItem: MenuItem;

  editMenuItemForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _menuItemService: MenuItemsService,
              private _ar: ActivatedRoute,
              private _router: Router) {

    this._ar.paramMap.subscribe(p => {
      this._menuItemService.getMenuItem(p.get('id')).subscribe((singleMenuItem: MenuItem) => {
        this.menuItem = singleMenuItem;
        this.createForm();
      });
    });
  }
  ngOnInit() {
  }

  createForm() {
    this.editMenuItemForm = this._form.group({
      MenuItemId: new FormControl(this.menuItem.MenuItemId),
      MenuItemName: new FormControl(this.menuItem.MenuItemName),
      MenuItemPrice: new FormControl(this.menuItem.MenuItemPrice),
      MenuItemDescription: new FormControl(this.menuItem.MenuItemDescription),
      MenuItemPicture: new FormControl(this.menuItem.MenuItemPicture)
    });
  }

  onSubmit(form) {
    const updateMenuItem: MenuItem = {
      MenuItemId: form.value.MenuItemId,
      MenuItemName: form.value.MenuItemName,
      MenuItemPrice: form.value.MenuItemPrice,
      MenuItemDescription: form.value.MenuItemDescription,
      MenuItemPicture: form.value.MenuItemPicture
    };
    this._menuItemService.updateMenuItem(updateMenuItem).subscribe(d => {
      this._router.navigate(['/menuItems']);
    });
  }
}