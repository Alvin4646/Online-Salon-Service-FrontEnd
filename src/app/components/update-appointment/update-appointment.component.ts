import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { Customer } from 'src/app/models/customer';
import { AppointmentsService } from 'src/app/services/appointment/appointments.service';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit{
  appointment:Appointment=new Appointment;
  customer:Customer=new Customer;
  availableTimeSlots: string[]= ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'] ;
  errMsg="";
  updateMsg="";
  constructor(private appointmentService:AppointmentsService,private customerService:CustomerService)
{}
  ngOnInit() {
   this.fetchAppointmentById();
   this.getCustomerById()
  }
fetchAppointmentById(){
  var i = sessionStorage.getItem('appId');
    const id: number = +i!;
  this.appointmentService.getAppointmentById(id).subscribe({
    next:(data)=>{
      this.appointment=data;
      this.updateMsg="Appointment fetched Successfully...";
      this.errMsg="";
      console.log(data)},
      error:(err)=>{this.errMsg=err.error;this.updateMsg=""}
  })
}
updateAppointment(){
  var i = sessionStorage.getItem('appId');
    const id: number = +i!;
  this.appointmentService. updateAppointment(id,this.appointment).subscribe({
    next:(data)=>{
      this.updateMsg="Appointment updated Successfully...";
      this.errMsg="";
      console.log(data);
    },
    error:(err)=>{
      this.errMsg=err.error;
      this.updateMsg=""
    }
  })
}
getCustomerById(){
  var i = localStorage.getItem('id');
  const id: number = +i!;
  this.customerService.getCustomerById(id).subscribe(
    {
      next:(data:any)=>{this.customer=data;console.log(data)},
      error:(err)=>{console.log(err)}
        
      
    }
  )
}
}
