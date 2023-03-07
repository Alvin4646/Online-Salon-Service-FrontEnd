import { Component,Inject, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment/payment.service';
@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.css']
})
export class PaymentDialogComponent implements OnInit{
  payment:Payment=new Payment;
  constructor(@Inject(MAT_DIALOG_DATA) private data:number,private service:PaymentService){}
  ngOnInit(){
    this.getPayment();
  }

  paymentForm=new FormGroup({
    type:new FormControl(''),
    status:new FormControl(''),
    amount:new FormControl('')

  })
  getPayment(){
    this.service.getPaymentById(this.data).subscribe({
      next:(pay)=>{this.payment=pay;console.log(pay)}
    })
  }

}
