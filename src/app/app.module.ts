import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { 
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule 
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteIndexComponent } from './components/note/note-index/note-index.component';
import { MenuItemIndexComponent } from './components/menuItem/menu-item-index/menu-item-index.component';

import { RestaurantsService } from './services/restaurants.service';
import { NoteIndexComponent } from './components/restaurant/note-index/note-index.component';

import { CustomersService } from './services/customers.service';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: '**', component: RegistrationComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,

    NoteIndexComponent,
    MenuItemIndexComponent

    NoteIndexComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    AuthService,
    MenuItemService

    RestaurantsService

    CustomersService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
