import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { UserInfo } from '../models/UserInfo';
import { isAdmin } from '../models/isAdmin';


const Api_Url = "https://kangaroodeliveryapi.azurewebsites.net";


@Injectable({

  providedIn: 'root'

})

export class AuthService {


  user_role: isAdmin;
  userInfo: Token;
  userData: Subject<{}>;
  isLoggedIn = new Subject<boolean>();



  constructor(

    private _http: HttpClient,

    private _router: Router) { }



  //private setHeader(): HttpHeaders {

    //return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);

 // }



  register(regUserData: RegisterUser) {

    return this._http.post(`${Api_Url}/api/Account/Register`, regUserData);

  }

  getRole(){
    if(!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)) }
 
    return this._http.get(`${Api_Url}/api/Account/GetRole`, { headers: this.setHeader() } ).subscribe((isAdmin: isAdmin) =>{
        this.user_role = isAdmin
        localStorage.setItem('user_role', isAdmin.Role);
        console.log(localStorage.getItem('user_role'));
    }
    );
  }
  
  login(loginInfo) {

    const str =

      `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;

    return this._http.post(`${Api_Url}/Token`, str)

      .subscribe((token: Token) => {

        this.userInfo = token;

        localStorage.setItem('id_token', token.access_token);

        this.isLoggedIn.next(true);

        this.setCurrentUser();

        //window.location.reload();

        this._router.navigate(['/home'],);

      });

  }



  setCurrentUser() {

    this._http.get(`${Api_Url}/api/Account/UserInfo`, { headers: this.setHeader() })

      .subscribe((userRole: UserInfo) => {

        localStorage.setItem('user_role', userRole.Role);

        localStorage.setItem('username', userRole.Username);

        window.location.reload();

      });

  }

  //logout(): Observable<Object> {
  //localStorage.clear();
  //this.isLoggedIn.next(false);

  //return this._http.post(`${Api_Url}/api/Account/Logout`, { headers: this.setHeader() } );
  //}

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('id_token')}`);
  }
  logout() {

    localStorage.clear();

    this.isLoggedIn.next(false);

    this._http.post(`${Api_Url}/api/Account/Logout`, { headers: this.setHeader() });

    this._router.navigate(['/login']);

    //window.location.reload();

  }



}