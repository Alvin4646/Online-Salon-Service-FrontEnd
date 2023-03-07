import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { Customer } from 'src/app/models/customer';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-admin-appointments',
  templateUrl: './admin-appointments.component.html',
  styleUrls: ['./admin-appointments.component.css']
})
export class AdminAppointmentsComponent implements OnInit{
  appointment:Appointment[]=[];
  customer:Customer[]=[]
  query:string="";
  constructor(private adminService:AdminService){}
  ngOnInit(){
    this.getAllAppointments();
    this.fetchAllCustomers();
  }
  getAllAppointments(){
    this.adminService.getAllAppointments().subscribe({
      next:(data)=>{this.appointment=data },
      error:(err)=>console.log(err)
    })
  }
  fetchAllCustomers(){
    this.adminService.getAllCustomers().subscribe({
      next:(data:any)=>{this.customer=data;console.log(data)},
      error:(err)=>{console.log(err)}
    })
  }

}
