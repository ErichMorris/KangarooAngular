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
import { RestaurantDetailComponent } from './components/restaurant/restaurant-detail/restaurant-detail.component';
import { RestaurantEditComponent } from './components/restaurant/restaurant-edit/restaurant-edit.component';
import { RestaurantDeleteComponent } from './components/restaurant/restaurant-delete/restaurant-delete.component';



const routes = 
 [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
 
{
   path:'restaurants',children:[
    { path: '', component: RestaurantIndexComponent },
    { path: 'create', component: RestaurantCreateComponent },
    {path:'detail/:id',component:RestaurantDetailComponent},
    {path:'edit/:id',component:RestaurantEditComponent},
    {path:'delete/id',component:RestaurantDeleteComponent}
  ]
},

  { path: 'menuItems', component: MenuItemIndexComponent },
  { path: 'customers', component: CustomerIndexComponent },
  { path: 'orders', component: OrderIndexComponent },
  { path: '**', component: RegistrationComponent },
 ];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    
    LoginComponent,
    MenuItemIndexComponent,

   
    RestaurantIndexComponent,

   
    RestaurantCreateComponent,

   
    OrderIndexComponent,

   
    RestaurantDetailComponent,

   
    RestaurantEditComponent,

   
    RestaurantDeleteComponent



  
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
