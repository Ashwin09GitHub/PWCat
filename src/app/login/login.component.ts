import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { User } from '../Model/User';
import { LoginService } from '../login.service';
import { Observable } from "rxjs/Observable";
import { DataTransferService } from '../data-transfer.service';

// import { $ } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  newuser: User;
  errorMsg:string;
  constructor(private route: ActivatedRoute, private router: Router, private logservice: LoginService,private datatfr: DataTransferService) { }

  ngOnInit() {
  }


  LoginClick(username: string, password: string) {
    // User us = new User();
    this.user = new User();
    this.user.Username = username;
    this.user.Password = password;
    this.logservice.getUser(this.user).subscribe((data) => {
      this.newuser = new User();
      if (data == null)
        this.errorMsg="*User name or password incorrect!";
      else {
       // this.newuser=data;
          this.newuser = data.User;
        localStorage.setItem('UserId', this.newuser.UserId+'');

         this.datatfr.announceMission( this.newuser);
        this.router.navigate(['/create',this.newuser.UserId]);

      }
    });
    //    this.logservice.getUser(this.user).subscribe((data)=>{ this.newuser = data
    
    //   console.log(data);
    //   console.log(this.newuser);
    //   console.log(data.Username);
    // });

    // var res=  this.logservice.getUser(this.user).subscribe((data:User)=>{ this.newuser=data;
    
    // var res =JSON.stringify(data);
    // console.log(data);
    //   console.log(this.newuser);
    //   console.log(this.newuser.Fname);
    // });
  //   console.log(res );
  //  console.log(res.);

  }
}

export interface NewUser {

}
