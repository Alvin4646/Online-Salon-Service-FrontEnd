import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { LoginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private security:LoginService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isAuth=this.security.isAdmin();
      if(!isAuth){
        Swal.fire({
          title: "UnAuthorized",
          text: "Sorry are not Authorized to visit this page",
          icon: 'warning',
         
        })
        // window.alert('You are not Authorized to visit this page')
       this.router.navigate(['home'])
      }
    return isAuth;
  
  }
  
}
