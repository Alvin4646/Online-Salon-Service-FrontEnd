import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:LoginService,private router:Router){}
  canActivate( ) {
    if(this.service.isLogin()){
      return true;
    }else{
      Swal.fire({
        title: "Login Required",
        text: "Sorry you have to login to view this page",
        icon: 'warning',
       
      })
      this.router.navigate(['login']);
      return false;
    }
    
  }
  
}
