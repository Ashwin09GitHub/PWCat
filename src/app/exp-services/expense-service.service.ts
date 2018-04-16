import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';

import {User} from '../Model/User'
import{ Expense } from'../Model/Expense';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ExpenseServiceService {

  constructor(private http:Http) { }

  CrateExpense(){

  }

  GetExpenseType(){

    let url='http://localhost:8090/ExpenseApi/Api/Expense/GetExpenseType';
   return this.http.get(url).map(res=>res.json());
  }
 CreateExpense(expance:Expense[]){
   let url='http://localhost:8090/ExpenseApi/Api/Expense/CreateExpense';
   let body = JSON.stringify(expance);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   let option = new RequestOptions();
   option.headers=headers;
   return this.http.post(url, body, option).map(res=>res.json());
 }


}
