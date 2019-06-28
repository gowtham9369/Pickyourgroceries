import { Component, OnInit } from '@angular/core';
import { MerchantService } from './merchant.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {Router} from "@angular/router";

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {
  public getallmerchant : any
  // public clickedEvent : any
  

  constructor(private mymerchantservice :MerchantService, private spinner: NgxSpinnerService) { 

  }

  getMerchantId(inputValue,inputValueName){
    localStorage.setItem("key", inputValue);
    localStorage.setItem("merchantName" ,inputValueName)
    // alert(inputValue);
    // alert(inputValueName);
  }
  ngOnInit() {
                /** spinner starts on init */
                this.spinner.show();
 
                setTimeout(() => {
                    /** spinner ends after 5 seconds */
                    this.spinner.hide();
                }, 2000);
    this.getallmerchant="";
    this.mymerchantservice.getMerchant().subscribe(data =>{
    this.getallmerchant=data;
    console.log("we Got",data)
    // alert(JSON.stringify(data));
    })

  }
}
