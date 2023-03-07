import { Component,Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import { SalonServiceService } from 'src/app/services/salonService/salon-service.service';
import { service } from 'src/app/models/service';
@Component({
  selector: 'app-update-salon-service',
  templateUrl: './update-salon-service.component.html',
  styleUrls: ['./update-salon-service.component.css']
})
export class UpdateSalonServiceComponent implements OnInit{
  services:service=new service;
  msg:string=""
  errorMsg:string=""
  constructor(@Inject(MAT_DIALOG_DATA) private id:number,private salonService:SalonServiceService){}
  ngOnInit(){
   this.salonService.getServiceById(this.id).subscribe({
    next:(data:any)=>{
      this.services=data;
      console.log(this.services)
    }
   })
  }
  updateServices(){
    this.salonService.updateService(this.services).subscribe({
      next:(data)=>{
        console.log(data)
        this.msg="Updated Successfully";
        this.errorMsg=""
      },
      error:(err)=>{
        this.errorMsg="Sorry Couldn't Update Service"
        this.msg="";
      }
    })
  }
}
