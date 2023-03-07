import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  constructor(private http:HttpClient) { }

  public generateToken(request: any){
    return this.http.post("http://localhost:8090/authenticate",request,{responseType:'text'as'json'})
  }
  
  public isAdmin(){
    if(localStorage.getItem('role')==='admin'){
      return true;
    }else{
      return false;
    }
  }
  public isUser(){
    if(localStorage.getItem('role')==='customer'){
      return true;
    }else{
      return false;
    }
  }


  public isLogin():boolean{
    if(localStorage.getItem('username')!=null){
      return true;
    }else{
      return false;
    }
  }
}
