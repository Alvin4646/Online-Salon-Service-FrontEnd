import { Time } from "@angular/common";
import { Payment } from "./payment";
import { service } from "./service";

export class Appointment{
    appointmentId!:number ;
    location!:string;
    preferredDate!:Date;
    preferredTime!:Time;
    appointmentStatus!:any;
    serviceList!: service[];
    payment!:Payment;

}