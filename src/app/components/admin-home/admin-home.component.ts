import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { Customer } from 'src/app/models/customer';
import { Payment } from 'src/app/models/payment';
import { service } from 'src/app/models/service';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{
  appointments:Appointment[]=[];
  customers:Customer[]=[];
  services:service[]=[];
  payments:Payment[]=[];
  constructor(private adminService:AdminService){}
  ngOnInit(){
    this.fetchAllAppointments()
    this.fetchAllCustomers()
    this.fetchAllServices()
    this.fetchAllPayments()
  }

  fetchAllAppointments(){
    this.adminService.getAllAppointments().subscribe({
      next:(data)=>{console.log(data); this.appointments=data},
      error:(err)=>{console.log(err)}
    })
  }

  fetchAllCustomers(){
    this.adminService.getAllCustomers().subscribe({
      next:(data:any)=>{this.customers=data;console.log(data)},
      error:(err)=>{console.log(err)}
    })
  }
  fetchAllServices(){
    this.adminService.getAllServices().subscribe({
      next:(data:any)=>{this.services=data}
    }
     
    )
  }

  fetchAllPayments(){
    this.adminService.getAllPayments().subscribe({
      next:(data:any)=>{this.payments=data}
    })
  }
}
