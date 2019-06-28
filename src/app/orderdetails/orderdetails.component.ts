import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { OrderdetailsService } from './orderdetails.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  public invoiceData : any
  public getInvoiceID: any;

  constructor(private invoicedetails :OrderdetailsService, private spinner: NgxSpinnerService) { 

  }

  ngOnInit() {
        /** spinner starts on init */
        this.spinner.show();

        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 5000);
    this.invoiceData="";
    this.getInvoiceID= localStorage.getItem("orderID");
    console.log("fins"+this.getInvoiceID)
    this.invoicedetails.getInvoiceData(this.getInvoiceID).subscribe(data =>{
    this.invoiceData=data;
    console.log("we Got Products",data)
    // alert(JSON.stringify(data));
    })

  }

}
