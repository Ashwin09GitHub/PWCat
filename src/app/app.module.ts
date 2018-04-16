import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes,CanActivate } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateExpensComponent } from './create-expens/create-expens.component';
import { CalenderControlComponent } from './calender-control/calender-control.component';


import {LoginService} from'./login.service';
import{DataTransferService} from './data-transfer.service';
import {ExpenseServiceService} from './exp-services/expense-service.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create/:id', component: CreateExpensComponent,canActivate:[] },
  { path: '**', component: HomeComponent }
 ]; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CreateExpensComponent,
    CalenderControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    HttpClientModule
  ],
  providers: [LoginService,DataTransferService,ExpenseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
