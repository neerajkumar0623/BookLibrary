import { Injectable } from '@angular/core';
import {  CanActivate, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private datas: DataService, private router: Router) {


  }

  canActivate():boolean {

    if (this.datas.IsLoggedIn()) {
      return true;

    }else{
         this.router.navigate(['/user-login']);
          return false;

    }


  
  }

}
