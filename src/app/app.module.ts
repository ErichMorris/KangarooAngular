import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { 
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule 
} from '@angular/material';
import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MenuItemIndexComponent } from './components/menuItem/menu-item-index/menu-item-index.component';

import { RestaurantsService } from './services/restaurants.service';


import { CustomersService } from './services/customers.service';
import { LoginComponent } from './components/login/login.component';
import { MenuItemService } from './services/menu-items.service';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: RegistrationComponent },
  { path: 'restaurants', component: RestaurantIndexComponent },
  { path: 'menuItems', component: MenuItemIndexComponent },
  { path: 'customers', component: CustomerIndexComponent },
  { path: 'orders', component: OrderIndexComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    MenuItemIndexComponent,
    LoginComponent



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
    MatInputModule
  ],
  providers: [
    AuthService,
    MenuItemService,
    RestaurantsService,
    CustomersService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
