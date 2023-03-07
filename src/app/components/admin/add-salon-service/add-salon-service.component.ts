import { Component } from '@angular/core';
import { service } from 'src/app/models/service';
import { SalonServiceService } from 'src/app/services/salonService/salon-service.service';

@Component({
  selector: 'app-add-salon-service',
  templateUrl: './add-salon-service.component.html',
  styleUrls: ['./add-salon-service.component.css']
})
export class AddSalonServiceComponent {
  services: service=new service
  msg: String = "";
  errorMsg: String = "";

constructor(private salonServices:SalonServiceService){}
onSubmit() {
  console.log(this.services);
  this.salonServices.postNewService(this.services)
      .subscribe(
        {
          next: (data) => {
            console.log(data);
            this.msg = "service added successfully";
            this.errorMsg = "";
          },
          error: (error) => {
            console.log(error);
            this.errorMsg = "Service already existed";
            this.msg = "";
            

          }
        });
  }
}
