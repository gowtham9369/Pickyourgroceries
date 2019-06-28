import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  public getcount : any
  public loading = false;
  constructor(private mydashboardservice :DashboardService , private spinner: NgxSpinnerService) { 

  }


  ngOnInit() {
        /** spinner starts on init */
        this.spinner.show();
 
        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 5000);
    this.loading = true;
    this.getcount="";
    this.mydashboardservice.generalCount().subscribe(data =>{ 
    this.loading = false;
    this.getcount=data;
    console.log("we Got",data)
    this.pieChartData = [this.getcount.CompletedOrderAmmount, this.getcount.pendingOrderAmmount, this.getcount.cancelledOrderAmmount];
    // alert(JSON.stringify(data));
    })

  }
  public pieChartLabels:string[] = ["Completed Orders Amount","Pending orders Amount","Cancelled Orders Amount"];
  public pieChartData:number[] = [0, 0, 0];
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
