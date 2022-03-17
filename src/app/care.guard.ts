import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CareGuard implements CanActivate {
  constructor(private datas: DataService, private router: Router) {


  }

  canActivate():boolean {

    if (this.datas.IsCareLoggedIn()) {
      return true;

    }else{
         this.router.navigate(['/care-login']);
          return false;

    }


  
  }

}
