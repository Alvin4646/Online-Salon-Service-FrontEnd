import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';
import {CartService} from 'src/app/services/cart/cart.service'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  customer:Customer=new Customer();
  constructor(private customerService:CustomerService,private cartService:CartService)
{}
  ngOnInit() {
   this.fetchCuctomerById()
  }
removeFromCart(sid:number){
  var i = localStorage.getItem('id');
    const cid: number = +i!;
    Swal.fire({
      title: 'Do you want to remove from cart?',
      
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      
    }).then((res)=>{
      if(res.isConfirmed){
        this.cartService.deleteServiceFromCart(sid,cid).subscribe({
          next:(data)=>{console.log(data); window.location.reload();},
          error:(err)=>{console.log(err)}
          
        })
      }else if(res.isDenied||res.isDismissed){
        Swal.fire("not removed from cart")
      }
    }
    )
 
}
fetchCuctomerById(){
  var i = localStorage.getItem('id');
  const id: number = +i!;
  
  this.customerService.getCustomerById(id).subscribe({
    next:(data:any)=>{this.customer=data;console.log(data) },
    error:(err)=>{console.log(err)}
  })
}
}
