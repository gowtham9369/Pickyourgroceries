import { Component, OnInit,Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MerchantbulkuploadService } from './merchantbulkupload.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-merchantbulkupload',
  templateUrl: './merchantbulkupload.component.html',
  styleUrls: ['./merchantbulkupload.component.css']
})
export class MerchantbulkuploadComponent implements OnInit {
  public categoryCount : any
  public check:any
  public message1:any
  public images:any
  public selectedImage: FileList;
  public getindividualmerchantid:any;
  public show_table:boolean=false;
  public unUploadedEntries12:any;
  public uploadedEntries:any;
  public pending_order_products:any;
  public show_table_pending_order:boolean=false;
  

  @Input() inventory = {
    fileName:"",
    merchant_id:this.getindividualmerchantid
   };
    constructor(private merchantInventory :MerchantbulkuploadService,private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getindividualmerchantid= localStorage.getItem("key");
    // alert(this.getindividualmerchantid);
    // alert(JSON.stringify(this.getindividualmerchantid));
  }

   upload(event) {
    this.selectedImage = event.target.files;
    const file = this.selectedImage.item(0);
    this.merchantInventory.uploadfile(file);
    console.log("file one ",file);
    console.log(JSON.stringify(this.images));
  }  

  uploader(input) {
        /** spinner starts on init */
        this.spinner.show();

        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 14000);
    this.merchantInventory.merchantinventory(input).subscribe(data =>{
      this.check=data;
      if(this.check.error==true){
        this.message1=data;
        this.show_table_pending_order=true;
        alert("Inventory Added Failed");
        // alert(JSON.stringify(this.message1.message));
        // console.log(JSON.stringify(this.message1.pending_order_products));
      }
      else if(this.check.error==false){
        this.message1=data;
        // this.uploadedEntries=data;
        this.unUploadedEntries12=this.message1.unUploadedEntries;
        this.show_table=true;
        console.log(JSON.stringify(this.message1.unUploadedEntries.entries));
        //console.log(JSON.stringify(this.message1.message));
        alert("Inventory Added Successfully");
        localStorage.removeItem("bucketnamemerchantinventory");
        // this.router.navigateByUrl('Getinventory');
      }
      })
  }
}
  