import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [LoginComponent]
})
export class NavBarComponent implements OnInit{
  constructor(public security:LoginComponent,private router:Router){}
  ngOnInit(){
  
}


}