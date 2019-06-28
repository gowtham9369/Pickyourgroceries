import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationService } from './notification.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  public unapprovedMerchant : any
  public message1 : any
  public message10 : any
  notify:{
    merchant_id:""
  }

  constructor(private myservice :NotificationService,private router: Router, private spinner: NgxSpinnerService) { 
  }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 3000);
    this.unapprovedMerchant="";
    this.myservice.getUnapprovedMerchant().subscribe(data =>{
    this.unapprovedMerchant=data;
    console.log("we Got",data)
    // alert(JSON.stringify(data));
    })
  }

  ApproveMerchant(input){
    // alert(input);
    this.myservice.approvemerchant(input).subscribe(data1 =>{
    console.log("Approve Merchant","merchant id",input);
    this.message1=data1;
    alert(this.message1.message);
    this.router.navigateByUrl('Notification');
    })
  }
  RejectMerchant(input){
    // alert(input);
    this.myservice.rejectmerchant(input).subscribe(data1 =>{
    console.log("Reject Merchant","merchant id",input);
    this.message10=data1;
    alert(this.message10.message);
    this.router.navigateByUrl('Notification');
    })
  }

}
