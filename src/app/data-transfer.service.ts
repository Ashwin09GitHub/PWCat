import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';

import{User} from './Model/User';

@Injectable()
export class DataTransferService {

  constructor() { }
  //Step 1
  private subject = new Subject<any>();
// Step 2
  private missionAnnouncedSource = new Subject<User>();
// Step 3
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
// Step 4 Method
  announceMission(mission: User) {
    this.missionAnnouncedSource.next(mission);
}

}
