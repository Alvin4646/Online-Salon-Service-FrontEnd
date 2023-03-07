import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from 'src/app/models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }
  public getAllPayments(): Observable<any> {
    return this.http.get("http://localhost:8090/payments", { responseType: "json" });
  }
  public updatePayment(id:number,payment:Payment){
    return this.http.put("http://localhost:8090/updatepayment/"+id,payment,{responseType: "json" });
  }
  public getPaymentById(id:number){
    return this.http.get("http://localhost:8090/payment/"+id,{ responseType: "json" });
  }
}
