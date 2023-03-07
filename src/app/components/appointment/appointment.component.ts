import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { service } from 'src/app/models/service';
import { AppointmentsService } from 'src/app/services/appointment/appointments.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  appointment: Appointment[] = [];
  services: service[] = [];
  cancelMsg="";
  deleteMsg="";
  errorMsg: String = "";
  constructor(private appointmentService: AppointmentsService, private customerService: CustomerService,private router: Router,private dialog:MatDialog) {
  }
  ngOnInit() {
    const token = localStorage.getItem('token');
    this.getAppointmentById();
    this.showService();
    this.appointmentService.getAllAppointments().
      subscribe(
        {
          next: (data) => {
            console.log(data);
          },
          error: (error) => {
            console.log(error);
          }
        }
      )
  }

  public getAppointmentById() {
    var i = localStorage.getItem('id');
    const id: number = +i!;
    let req = this.customerService.getAppointmentByid(id);
    req.subscribe({
      next: (data: any) => { console.log(data); this.appointment = data; console.log(this.appointment) },
      error: (err) => console.log(err)
    })
  }

  public cancelAppointmentByid(id: any) {
    const token = localStorage.getItem('token');
    Swal.fire({
      title: 'Are you sure you want to cancel this Appointment?',
      
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      
    }).then((res)=>{
      if(res.isConfirmed){
        let req = this.appointmentService.cancelAppointment(id);
        req.subscribe({
          next: (data) => {
            this.cancelMsg="Appointment cancelled successfully!";
            this.errorMsg="";
            console.log(data)
            window.location.reload()
          },
          error: (err) => {
            this.errorMsg=err.error;
            this.cancelMsg="";
            console.log(err)}
        })
      }
    }
    )
    
    
  }

  public isCancelDisabled(date: any) {
    const appointmentDate = new Date(date);
    const currentDate = new Date();
    const onday = 24 * 60 * 60 * 1000;
    return appointmentDate.getTime() - currentDate.getTime() <= onday;
  }

  public deleteAppointment(aid:number){
    var i = localStorage.getItem('id');
    const id: number = +i!;
    Swal.fire({
      title: 'Are you sure you want to delete this Appointment?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      
    }).then(
    (res)=>{if(res.isConfirmed){
      this.customerService.deleteAppointment(id,aid).subscribe(
        {
          next:(data:any)=>{
            this.deleteMsg="Appointment Deleted Successfully!";
            this.errorMsg="";
            console.log(data)
            window.location.reload()},
            
          error:(err:any)=>{
            
            this.errorMsg=err.error;
            this.deleteMsg="";
            console.log(err)}
        }
      )
    }

    }
    )
 
    
  }

  onBookClick(id:any){
    sessionStorage.setItem('appId',id);
    this.router.navigate(['/payment']);
  }

  onUpdateClick(id:any){
    sessionStorage.setItem('appId',id);
    this.router.navigate(['/updateAppointment']);
  }

  public showService() {
    for (let i = 0; i < this.appointment.length; i++) {
      console.log(this.appointment[i].serviceList);
    }
  }
  showPayment(id:any){
    this.dialog.open(PaymentDialogComponent,{
      data:id,
      height: '55%',
      width: '25%',
    })
  }
}
