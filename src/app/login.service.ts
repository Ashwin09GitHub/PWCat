import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';

import { User } from './Model/User'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Options } from 'selenium-webdriver/chrome';
//import { promise } from 'protractor';
@Injectable()
export class LoginService {
  constructor(private http: Http, private httpClinet: HttpClient) { }


  getUser(user: User) {
    let body = JSON.stringify(user);
    let url = 'http://localhost:8090/ExpenseApi/Api/Expense/userlogin';
    var data = { UserName: user.Username, Password: user.Password };
    return this.http.post('http://localhost:8090/ExpenseApi/Api/Expense/userlogin', data).map(res => res.json());

    //let headers = new HttpHeaders();
   // headers.append('Content-Type', 'application/json');


    // let headers = new HttpHeaders().set('content-type', 'application/json');
    // return this.httpClinet.post(url, body,{headers}).map(r=>r.json)

    //  return response;
  }

  RegisterUser(user: User) {
    let body = JSON.stringify(user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let option = new RequestOptions();
    option.headers = headers;
    let url = 'http://localhost:8090/ExpenseApi/Api/Expense/Resgister';
    return this.http.post(url, body, option).map(res => res.json());
  }

}
