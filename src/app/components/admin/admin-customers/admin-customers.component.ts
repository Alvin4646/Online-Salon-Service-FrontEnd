import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { AdminService } from 'src/app/services/admin/admin.service';
import { AdminHomeComponent } from '../../admin-home/admin-home.component';

@Component({
  selector: 'app-admin-customers',
  templateUrl: './admin-customers.component.html',
  styleUrls: ['./admin-customers.component.css']
  
})
export class AdminCustomersComponent implements OnInit {
  customer:Customer[]=[]
  query:string="";
  constructor(private admin:AdminService){}
  ngOnInit(){
    this.fetchAllCustomers()

  }
  fetchAllCustomers(){
    this.admin.getAllCustomers().subscribe({
      next:(data:any)=>{this.customer=data}
    })
  }
 
}
