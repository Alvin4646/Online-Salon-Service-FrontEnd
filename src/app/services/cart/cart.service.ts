import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  deleteServiceFromCart(sid:number,cid:number){

    return this.http.delete("http://localhost:8090/cart/delete/service/"+sid+"/"+cid,{responseType:'json'});
  }
}
