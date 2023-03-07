import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { 
  }
  public getAppointmentByid(id:number){
    return this.http.get("http://localhost:8090/customer/appointments/"+id, { responseType: "json" });
  }
  public getCustomerById(id:number){
    return this.http.get("http://localhost:8090/customer/"+id, { responseType: "json" });
  }

  public deleteAppointment(cid:number,aid:number){
    
    return this.http.delete("http://localhost:8090/customer/appointment/"+cid,{body: aid,responseType: "json"});
  }
  public addCustomer(cust:Customer){
    return this.http.post("http://localhost:8090/customer",cust,{ responseType: "json"});
  }

  public updateCustomer(cust:Customer,id:number){
    return this.http.put("http://localhost:8090/customers/update/"+id,cust,{ responseType: "json"});
  }
}
