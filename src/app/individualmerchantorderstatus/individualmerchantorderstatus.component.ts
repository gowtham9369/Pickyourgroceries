import { Component, OnInit } from '@angular/core';
import { IndividualmerchantorderstatusService } from './individualmerchantorderstatus.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-individualmerchantorderstatus',
  templateUrl: './individualmerchantorderstatus.component.html',
  styleUrls: ['./individualmerchantorderstatus.component.css']
})
export class IndividualmerchantorderstatusComponent implements OnInit {
public getindividualmerchantid: any;
public listOfOrders :any;
public rating:any;
public getmerchantrating:any;
public merchantname:any;

  constructor(private merchantOrderStatus :IndividualmerchantorderstatusService, private spinner: NgxSpinnerService) { 
    
  }
  getinvoice(input){
    localStorage.setItem("orderID", input);
    // alert(input);
  }
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 5000);
    this.listOfOrders="";
    this.getindividualmerchantid= localStorage.getItem("key");
    this.merchantname=localStorage.getItem("merchantName");
    //alert(this.merchantname);
    console.log("fins"+this.getindividualmerchantid)
    this.merchantOrderStatus.getData(this.getindividualmerchantid).subscribe(data =>{
    this.listOfOrders=data;
    });
    // this.rating.getRating(this.getindividualmerchantid).subscribe(data1 =>{
    //   this.getmerchantrating=data1;
    //   console.log(JSON.stringify(data1));
    //   alert(JSON.stringify(data1));
    //   })
  }
}
