import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RestaurantsService } from './services/restaurants.service';
import { CustomersService } from './services/customers.service';
import { RestaurantIndexComponent } from './components/restaurant/restaurant-index/restaurant-index.component';
import { AuthService } from './services/auth.service';
import { MenuItemsService } from './services/menu-items.service';
import { RestaurantCreateComponent } from './components/restaurant/restaurant-create/restaurant-create.component';
import { OrdersService } from './services/orders.service';
import { OrderIndexComponent } from './components/order/order-index/order-index.component';
import { LoginComponent } from './components/login/login.component';


import { RestaurantDetailComponent } from './components/restaurant/restaurant-detail/restaurant-detail.component';
import { RestaurantEditComponent } from './components/restaurant/restaurant-edit/restaurant-edit.component';
import { RestaurantDeleteComponent } from './components/restaurant/restaurant-delete/restaurant-delete.component';

import { CustomerIndexComponent } from './components/customer/customer-index/customer-index.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { CustomerDetailComponent } from './components/customer/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './components/customer/customer-edit/customer-edit.component';
import { CustomerDeleteComponent } from './components/customer/customer-delete/customer-delete.component';

import { OrderCreateComponent } from './components/order/order-create/order-create.component';
import { OrderDetailComponent } from './components/order/order-detail/order-detail.component';
import { OrderEditComponent } from './components/order/order-edit/order-edit.component';
import { OrderDeleteComponent } from './components/order/order-delete/order-delete.component';

import { MenuItemIndexComponent } from './components/menuItem/menu-item-index/menu-item-index.component';
import { MenuItemCreateComponent } from './components/menuItem/menu-item-create/menu-item-create.component';
import { MenuItemDetailComponent } from './components/menuItem/menu-item-detail/menu-item-detail.component';
import { MenuItemEditComponent } from './components/menuItem/menu-item-edit/menu-item-edit.component';
import { MenuItemDeleteComponent } from './components/menuItem/menu-item-delete/menu-item-delete.component';

import { AboutComponent } from './components/about/about.component';
import { UserCustomerComponent } from './components/user-customer/user-customer.component';
import { UserRestaurantComponent } from './components/user-restaurant/user-restaurant.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { UserConfirmationComponent } from './components/user-confirmation/user-confirmation.component';
import { UserHomeComponent } from './components/user-home/user-home.component';



const routes =
  [
    { path: 'register', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
    { path: 'restaurants', component: RestaurantIndexComponent },
    { path: 'restaurants/create', component: RestaurantCreateComponent },
    { path: 'restaurants/detail/:id', component: RestaurantDetailComponent },
    { path: 'restaurants/edit/:id', component: RestaurantEditComponent },
    { path: 'restaurants/delete/id', component: RestaurantDeleteComponent },
    { path: 'menuItems', component: MenuItemIndexComponent },
    { path: 'menuItems/create', component: MenuItemCreateComponent },
    { path: 'menuItems/detail/:id', component: MenuItemDetailComponent },
    { path: 'menuItems/edit/:id', component: MenuItemEditComponent },
    { path: 'menuItems/delete/:id', component: MenuItemDeleteComponent },
    { path: 'customers', component: CustomerIndexComponent },
    { path: 'orders', component: OrderIndexComponent },
    { path: '', component: UserHomeComponent },
    { path: 'orders/create', component: OrderCreateComponent },
    { path: 'orders/detail/:id', component: OrderDetailComponent },
    { path: 'orders/delete/:id', component: OrderDeleteComponent },
    { path: 'orders/edit/:id', component: OrderEditComponent },
    { path: 'about', component: AboutComponent },
    { path: 'home', component: UserHomeComponent },
    { path: 'userCustomer', component: UserCustomerComponent },
    { path: 'userRestaurant', component: UserRestaurantComponent },
    //{ path: '**', component: RegistrationComponent },
    { path: 'customers/create', component: CustomerCreateComponent },
    { path: 'customers/detail/:id', component: CustomerDetailComponent },
    { path: 'customers/edit/:id', component: CustomerEditComponent },
    { path: 'customers/delete/:id', component: CustomerDeleteComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    AboutComponent,
    MenuItemIndexComponent,
    RestaurantIndexComponent,
    RestaurantCreateComponent,
    OrderIndexComponent,
    RestaurantDetailComponent,
    RestaurantEditComponent,
    RestaurantDeleteComponent,
    LoginComponent,
    RestaurantCreateComponent,
    CustomerIndexComponent,
    CustomerCreateComponent,
    CustomerDetailComponent,
    CustomerEditComponent,
    CustomerDeleteComponent,
    OrderCreateComponent,
    OrderDetailComponent,
    OrderEditComponent,
    OrderDeleteComponent,
    MenuItemCreateComponent,
    MenuItemDetailComponent,
    MenuItemEditComponent,
    MenuItemDeleteComponent,
    UserCustomerComponent,
    UserRestaurantComponent,
    UserMenuComponent,
    UserConfirmationComponent,
    UserHomeComponent,
   
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],

  providers: [
    AuthService,
    MenuItemsService,
    OrdersService,
    RestaurantsService,
    CustomersService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
