import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Payment } from 'src/app/models/payment';
import { AdminService } from 'src/app/services/admin/admin.service';
import { PaymentService } from 'src/app/services/payment/payment.service';

@Component({
  selector: 'app-admin-payment',
  templateUrl: './admin-payment.component.html',
  styleUrls: ['./admin-payment.component.css']
})
export class AdminPaymentComponent implements OnInit {
payments:Payment[]=[];
customer:Customer[]=[];
payment:Payment=new Payment;
query:string="";
  constructor(private service:PaymentService,private adminService:AdminService){}
  ngOnInit(){
    this.fetchAllPayments()
   this.fetchAllCustomers()
  }
  fetchAllPayments(){
    this.service.getAllPayments().subscribe({
      next:(data)=>{this.payments=data;console.log(data)} 
    })
  }
  fetchAllCustomers(){
    this.adminService.getAllCustomers().subscribe({
      next:(data:any)=>{this.customer=data;console.log(data)},
      error:(err)=>{console.log(err)}
    })
  }
  updatePaymentStatus(id:number){
    this.payment.status="PAID";
    this.service.updatePayment(id,this.payment).subscribe({
      next:(data)=>{console.log(data);window.location.reload()}
    })
  }
}
