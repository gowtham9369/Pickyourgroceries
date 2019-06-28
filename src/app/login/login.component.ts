import { Component, OnInit,Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from './login.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  // styleUrls: ['./login.component.css','./login.component.scss']
})
export class LoginComponent implements OnInit {
public message1:any;
public message:any
public check:any
@Input() logging = {
  admin_email:"",
  admin_password:""
};

  constructor(private login :LoginService,private router: Router) { }

  ngOnInit() {}

  loggedin(){
    this.login.login(this.logging).subscribe(data =>{
      this.check=data;
      if(this.check.error==true){
        this.message1=data;
        alert(this.message1.message);
        this.router.navigateByUrl('Login');
      }
      else if(this.check.error==false){
        this.router.navigateByUrl('Dashboard');
        console.log("Login",data);
        this.message1=data;
        alert(this.message1.status);
      }
      })
  }

}
