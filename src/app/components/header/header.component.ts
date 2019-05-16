import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { RoleGuardService } from 'src/app/services/role-guard.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  isLoggedIn: boolean;
  isAdmin: boolean;

  constructor(public _router: Router, public _authService: AuthService) { }

  ngOnInit() {
    if(localStorage.getItem('id_token')){
      this.isLoggedIn = true;
      this.username = localStorage.getItem('user');
      if(localStorage.getItem('username') == "Admin"){
        this.isAdmin = true;
        console.log(this.isAdmin);
      }
      else{
        this.isAdmin = false;
        console.log(this.isAdmin);
      }
    }
  }
  onLogOut(){
    this._authService.logout();
    this.isLoggedIn = false;
    this._router.navigate(['/login']);
  }
 }
 export interface UserData {
  user:string;
  userName:string;
  email: string;
  isLoggedIn: boolean;
  isOrganization: boolean;
 }
