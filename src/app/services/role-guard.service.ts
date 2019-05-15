import { Injectable } from '@angular/core';

import { Router, CanActivate } from '@angular/router';

import { UserInfo } from '../models/UserInfo';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';



@Injectable({

  providedIn: 'root'

})

export class RoleGuardService implements CanActivate {



  _userInfo: UserInfo;



  constructor(

    private _router: Router,
    private authService: AuthService) { }



  canActivate(): Observable<boolean> {

    return new Observable<boolean>((obs) => {

        this.authService.getRole();
      if (localStorage.getItem('user_role') !== "Admin") {
          console.log(localStorage.getItem('user_role'))
        this._router.navigate(['/login']);
        return obs.next(false);
      }
      else {
        return obs.next(true);
      }
    });
  }
}