import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import { MenuItemService } from './services/menuitems.service';
import { RestaurantCreateComponent } from './components/restaurant/restaurant-create/restaurant-create.component';
import { OrdersService } from './services/orders.service';
import { OrderIndexComponent } from './components/order/order-index/order-index.component';
import { LoginComponent } from './components/login/login.component';
import { MenuItemIndexComponent } from './components/menuItem/menuItem-index/menuItem';
import { CustomerIndexComponent } from './components/customer/customer-index/customer-index.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { CustomerDetailComponent } from './components/customer/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './components/customer/customer-edit/customer-edit.component';
import { CustomerDeleteComponent } from './components/customer/customer-delete/customer-delete.component';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: RegistrationComponent },
  { path: 'restaurants', component: RestaurantIndexComponent },
  { path: 'menuItems', component: MenuItemIndexComponent },
  { path: 'customers', component: CustomerIndexComponent },
  { path: 'customers/create', component: CustomerCreateComponent },
  { path: 'customers/detail/:id', component: CustomerDetailComponent },
  { path: 'customers/edit/:id', component: CustomerEditComponent },
  { path: 'customers/delete/:id', component: CustomerDeleteComponent },
  { path: 'orders', component: OrderIndexComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    MenuItemIndexComponent,
    LoginComponent,
    RestaurantCreateComponent,
    OrderIndexComponent,
    CustomerIndexComponent,
    CustomerCreateComponent,
    CustomerDetailComponent,
    CustomerEditComponent,
    CustomerDeleteComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
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
    MenuItemService,
    OrdersService,
    RestaurantsService,
    CustomersService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
