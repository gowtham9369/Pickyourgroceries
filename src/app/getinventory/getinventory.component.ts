import { Component, OnInit } from '@angular/core';
import { GetinventoryService } from './getinventory.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-getinventory',
  templateUrl: './getinventory.component.html',
  styleUrls: ['./getinventory.component.css']
})
export class GetinventoryComponent implements OnInit {
public getint:any;
public listOfInventory:any;
public DownloadedData:any;
public link:any;
public merchantname:any;

constructor(private inventory :GetinventoryService, private spinner: NgxSpinnerService) { 
    
}

  ngOnInit() {
	/** spinner starts on init */
	this.spinner.show();

	setTimeout(() => {
		/** spinner ends after 5 seconds */
		this.spinner.hide();
	}, 5000);
    this.listOfInventory="";
    this.getint= localStorage.getItem("key");
    this.merchantname=localStorage.getItem("merchantName");
    console.log("fins"+this.getint)
    // alert(this.getint);
    this.inventory.getData(this.getint).subscribe(data =>{
    this.listOfInventory=data;
    console.log("Inventory Details"+this.listOfInventory);
    })
  }
    DownloadInventory(){
	// alert("1");
    this.inventory.downloadData().subscribe(data =>{
      this.DownloadedData=data;
	  alert("Inventory Downloaded Successfully");
	  console.log(this.DownloadedData);
	  window.open(this.DownloadedData.link,'Download');
    })
  }
}
