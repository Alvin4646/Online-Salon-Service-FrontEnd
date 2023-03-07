import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/models/appointment';
import { Payment } from 'src/app/models/payment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(private http: HttpClient) {

  }


  public getAllAppointments(): Observable<any> {
   
    return this.http.get("http://localhost:8090/appointments", { responseType: "json" });
  }


  public cancelAppointment(id: any): Observable<any> {
    
    const body = { title: 'Angular PUT Request Example' };
    return this.http.put("http://localhost:8090/appointment/cancel/" + id, body, {  responseType: " text" as "json" });
  }

  public addAppointment(id: any,appointment:Appointment): Observable<any>{

    return this.http.post("http://localhost:8090/appointment/"+id,appointment,{responseType: "json"});
  }

  public bookAppointment(cid:number,aid:number,payment:Payment){
    return this.http.post("http://localhost:8090/appointment/"+cid+"/"+aid,payment,{responseType: "json"});
  }
  public updateAppointment(id: number,appointment:Appointment): Observable<any> {
    
    return this.http.put("http://localhost:8090/appointment/" + id, appointment, {  responseType: "json" });
  }
  public getAppointmentById(id: number): Observable<any> {
    
    return this.http.get("http://localhost:8090/appointment/" + id, {  responseType: "json" });
  }
}
