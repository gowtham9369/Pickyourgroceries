import { Component, OnInit } from '@angular/core';
import { ReportsService } from './reports.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})

export class ReportsComponent implements OnInit {

  public reportsData : any

  constructor(private myservice :ReportsService) { 

  }
  ngOnInit() {
    this.reportsData="";
    this.myservice.getReports().subscribe(data =>{
    this.reportsData=data;
    console.log("we Got Reports",data)
    // alert(JSON.stringify(data));
    this.pieChartData = [this.reportsData.completedOrderCount, this.reportsData.pendingOrderCount, this.reportsData.cancelledOrderCount];
    // alert(JSON.stringify(data));
    })

  }
  public pieChartLabels:string[] = ["Completed Orders","Pending orders","Cancelled Orders"];
  public pieChartData:number[] = [100, 10, 50];
  public pieChartType:string = 'pie';

 
  // events on slice click
  public chartClicked(e:any):void {
    console.log(e);
  }
 
 // event on pie chart slice hover
  public chartHovered(e:any):void {
    console.log(e);
  }




}