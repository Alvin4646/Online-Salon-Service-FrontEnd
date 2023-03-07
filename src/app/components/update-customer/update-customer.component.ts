import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit{
  customer:Customer=new Customer();
  isEditable:boolean=false
  msg: String = "";
errorMsg: String = "";
  constructor(private customerService:CustomerService){}
  ngOnInit()  {
    var i = localStorage.getItem('id');
    const id: number = +i!;
    this.customerService.getCustomerById(id).subscribe(
      (data)=>{console.log(data);
        this.customer=data;
      }
    )
  }

  editClick(){
    this.isEditable=!this.isEditable;
  }
 
  editCustomerProfile(){
    var i = localStorage.getItem('id');
    const id: number = +i!;
    this.customerService.updateCustomer(this.customer,id).subscribe({
      next:(data:any)=>{console.log(data);
        this.msg="You have Successfully Updated your Profile...";
      this.errorMsg=""
      },
      error:(err:any)=>{console.log(err);
        this.errorMsg=err.error;
        this.msg="";
      }
    });

  }
}
