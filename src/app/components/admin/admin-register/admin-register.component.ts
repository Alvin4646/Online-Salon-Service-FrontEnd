import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, PatternValidator, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent {


  admin:Customer=new Customer;
  msg:string=""
  errorMsg:string=""
  adminRegister: FormGroup;
  constructor(private formBuilder:FormBuilder,private custService:CustomerService){
    this.adminRegister=this.formBuilder.group({
      userName:new FormControl("",[Validators.required,Validators.pattern('[a-zA-z]*')]) ,
      password:new FormControl("",[Validators.required,Validators.pattern('[a-zA-z0-9@._]*')]),
      confirmPassword:new FormControl("",[Validators.required]),
      name:new FormControl("",[Validators.required]),
      email:new FormControl("",[Validators.required,Validators.email]),
      contactNo:new FormControl("",[Validators.required,Validators.minLength(10)]),
      dob:new FormControl("",[Validators.required,this.birthdateValidator()]),
      address:new FormControl("",[Validators.required,Validators.min(3)]),
  
    },{validators:this.checkPasswords.bind(this)})
  }
 
  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password')!.value;
    let confirmPass = group.get('confirmPassword')!.value
    return pass === confirmPass ? null : { notSame: true }
  }
  birthdateValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const currentDate = new Date();
      const inputDate = new Date(control.value);
      if (inputDate > currentDate) {
        return {'futureDate': true};
      }
      return null;
    };
  }
  
  getControl(name:any):AbstractControl|null{
    return this.adminRegister.get(name)
  }
  get userName(){
    return this.adminRegister.get('userName')
  }

  registerAdmin(){
    console.log (this.admin);
    this.admin=this.adminRegister.value
    this.admin.role="admin";
    this.custService.addCustomer(this.admin).subscribe(
      {
        next:(data)=>{
          this.msg="Admin Registered Successfully Now please Login in"
          this.errorMsg=""
          
          console.log(data)},
        error:(err)=>{
          this.errorMsg=err.error
          this.msg=""
          console.log(err)}
      }
    )
  }

  onsub(){
   
    this.admin=this.adminRegister.value
    this.admin.role="admin"
    console.log(this.admin)
    console.log(this.adminRegister.value)
   
  }
}
