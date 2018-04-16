import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ExpenseServiceService } from '../exp-services/expense-service.service';
import { ExpenseType } from '../Model/ExpenseType';
import { Expense } from '../Model/Expense';
import { DataTransferService } from '../data-transfer.service';
import { User } from '../Model/User';

@Component({
  selector: 'app-create-expens',
  templateUrl: './create-expens.component.html',
  styleUrls: ['./create-expens.component.css']
})
export class CreateExpensComponent implements OnInit {
  today = Date.now();
  selectedDate = "";
  formReq: string;
  expenseList: any;
  SelectOptionName: string;
  ExpneseData: Expense[] = [];
  ExpenseTypesList: ExpenseType[] = [];
  totalCost: number = 0;
  @ViewChild('f') form: any;
  user: User;
  loguserId:number=0;
  expData: Expense;
  constructor(private dataservice: DataTransferService, private expService: ExpenseServiceService,private activeroute:ActivatedRoute,private router: Router) {
  //  this.user = new User();
    // dataservice.missionAnnounced$.subscribe((mission) => {
    //   if (this.loguserId == 0 || this.loguserId == undefined) {
    //     this.loguserId = mission.UserId;
    //     console.log(  this.loguserId);
    //   }
    // });
    //this.activeroute.params.subscribe(params=>{ this.loguserId= Number(params.value)});
  //console.log(this.activeroute.params)
  this.activeroute.params.subscribe(params=>{   this.loguserId=params.id});

  if(this.loguserId==0 || this.loguserId==undefined){
    this.router.navigate(['login']);
  }
  }
  ngOnInit() {
    this.GetExpenseType();
    //this.ExpneseData=[];
  }

  GetExpenseType() {
    this.expService.GetExpenseType().subscribe((data) => {
     // console.log(data)
      this.ExpenseTypesList = data.ExpenseType;
    });
  }

  SelectedDate(data1: any) {
    this.selectedDate = data1.target.value;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      console.log(this.loguserId)
      this.expData = new Expense();
      this.expData.ExpenseDate = this.form.value.selectdate;
      this.expData.ExpenseCatId = this.form.value.catType;
      this.expData.ExpenseCategoryName = this.SelectOptionName;
      this.expData.ExpenseCost = this.form.value.expCost;
      this.expData.Comment = this.form.value.txtDesc;
      this.expData.UserId = Number(this.loguserId);
      this.ExpneseData.push(this.expData);
      this.totalCost += Number(this.form.value.expCost);
      this.formReq = "";
    }
    else {
      this.formReq = "*Please Enter the values in all required fields!";
    }
  }

  DeleteExpense(i:number){
    this.totalCost -= Number( this.ExpneseData[i].ExpenseCost);
    this.ExpneseData.splice(i, 1);
  }
  SaveExpens() {
  //  console.log(this.ExpneseData);
    this.expService.CreateExpense(this.ExpneseData).subscribe((data)=>{
    //let res = data.res;
    if(data.Result >0){
      alert( data.Result +" Expenses Save Successfully.");
      this.ExpneseData=[];
      this.form.reset();
    }
    });
  }


  //ddl selected 
  selectName(val: any) {

  //  console.log(val.target.selectedOptions[0].innerText);
    this.SelectOptionName = val.target.selectedOptions[0].innerText;
  }

  onOptionSelected(event) {
    console.log(event); //option value will be sent as event
  }

}
