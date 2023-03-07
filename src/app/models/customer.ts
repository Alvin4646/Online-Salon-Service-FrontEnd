import { Appointment } from "./appointment";
import { Cart } from "./cart";

export class Customer{
    userId?:number;
    userName?:string;
    password?:string;
    role?:string="customer";
    name?:string;
    email?:string;
    contactNo?:number;
    dob?:Date;
    address?:string;
    appointments?:Appointment[];
    cart?:Cart;

}
