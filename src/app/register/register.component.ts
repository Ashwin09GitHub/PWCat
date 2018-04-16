import { Component, OnInit, ViewChild } from '@angular/core';
import {  ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { User } from '../Model/User';
import { BrowserModule } from '@angular/platform-browser';
//import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {LoginService} from '../login.service';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: User;
  pwdError: string = "";
  formReq: string = "";
  @ViewChild('f') form: any;

  constructor( private router: Router,private logService:LoginService,private datatfr: DataTransferService) { }
  ngOnInit() {
    // this.createFormControls();
    // this.createForm();
  }

  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.newUser = new User();
      this.newUser.Fname = this.form.value.Fname;
      this.newUser.Lname = this.form.value.Lname;
      this.newUser.Username = this.form.value.email;
      this.newUser.Password = this.form.value.Password;
      this.newUser.Mobile = this.form.value.Mobile;
      if (this.form.value.Password != this.form.value.ConformPassword) {
        //this.reset()
        this.pwdError = "*Password Not match!";
        this.form.value.Password = "";
        this.form.value.ConformPassword = "";
      }
      else{
        this.formReq = "";
        this.pwdError="";
   // Call Service to Save Data 

   console.log(this.newUser);
        this.logService.RegisterUser(this.newUser).subscribe((data)=>{
          if(data!=null){
            alert("User Register Successfully.");
            this.datatfr.announceMission( data.User);
            this.router.navigate(['/create']);
          }
          else{
            alert("User is Not register!plz try again!");
          }
          
        });

       
      }
     
    }
    else {
      this.formReq = "*Please Enter the values in all required fields!";
    }




  }
  reset() {
    this.pwdError = "*Password Not match!";
    this.form.value.Password = "";
    this.form.value.ConformPassword = "";
  }

}
