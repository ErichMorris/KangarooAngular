import { Component, OnInit } from '@angular/core';
import { MenuItemsService } from '../../../services/menu-items.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item-create',
  templateUrl: './menu-item-create.component.html',
  styleUrls: ['./menu-item-create.component.css']
})
export class MenuItemCreateComponent implements OnInit {

  menuItemForm: FormGroup;

  constructor(private _menuItemService: MenuItemsService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.menuItemForm = this._form.group({
      MenuItemName: new FormControl,
      MenuItemPrice: new FormControl,
      MenuItemDescription: new FormControl,
      MenuItemPicture: new FormControl,
      RestaurantId: new FormControl
    });
  }

  onSubmit() {
    this._menuItemService.createMenuItem(this.menuItemForm.value).subscribe(data => {
      this._router.navigate(['/menuItems']);
    });
  }
}
