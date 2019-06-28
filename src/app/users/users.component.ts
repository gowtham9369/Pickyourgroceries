import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public records : any

  constructor(private myservice :UsersService, private spinner: NgxSpinnerService) { 
  }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 2000);
    this.records="";
    this.myservice.getData().subscribe(data =>{
    this.records=data;
    console.log("we Got",data)
    // alert(JSON.stringify(data));
    })
  }
}
