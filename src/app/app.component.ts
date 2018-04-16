import { Component,Input, Output, EventEmitter } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import{DataTransferService} from './data-transfer.service';
import { User } from './Model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'app';
  Fname:string="";

  user:User=null;

  constructor(private dataservice: DataTransferService,private route: ActivatedRoute, private router: Router){
   this.user= new User();
   dataservice.missionAnnounced$.subscribe((mission) =>{ 
     this.user = mission;
     //console.log(mission);
     //console.log( this.user)
     this.Fname=this.user.Fname;
  });
  // console.log(this.user);
   

  }
  Logout()
  {
    this.user=null;
    this.Fname=null;
    this.router.navigate(['/login']);
  }
}
