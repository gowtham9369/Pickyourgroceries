import { Component, OnInit,Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AddinventoryService } from './addinventory.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-addinventory',
  templateUrl: './addinventory.component.html',
  styleUrls: ['./addinventory.component.css']
})
export class AddinventoryComponent implements OnInit {
public categoryCount:any;
public productsname:any;
public getindividualmerchantid:any;
public inventories:any;
public message1:any;
public individualproductDetails:any;
public check:any;
public message:any;

  constructor(private addinventory :AddinventoryService,private router: Router) { }

  ngOnInit() {
    // get category
    this.categoryCount=null;
    this.addinventory.cate().subscribe(data =>{
    this.categoryCount=data;
    console.log("Get Category",data)
    })
    // get merchant id
    this.getindividualmerchantid= localStorage.getItem("key");
    // alert(this.getindividualmerchantid);
  }
  categoriesname(val1){
    // console.log("First Data",val);
    this.addinventory.pro(val1).subscribe(data =>{
      this.productsname=data;
    })
  }
  product(val2){
      // console.log("First Data",val);
      this.addinventory.praticulardetails(val2).subscribe(data =>{
        this.individualproductDetails=data;
        // alert(JSON.stringify(data));
        this.allcat['sku']=this.individualproductDetails.product.sku;
        this.allcat['quantification']=this.individualproductDetails.product.quantification;
      })
    }
  @Input() allcat = {
    merchant_id: localStorage.getItem("key"),
    category_id:"",
    product_id:"",
    sku:"",
    available_for_sale:"",
    quantification:"",
    default_price:"",
    selling_price:"",
    pyg_price:"",
    seasonal:"",
    available_qty:"",
    low_stock:""};


  AddInventory(category_id,product_id,sku,available_for_sale,quantification,default_price,selling_price,pyg_price,seasonal,low_stock,available_qty){
    console.log(JSON.stringify(this.allcat));
    this.addinventory.addinventory(this.allcat).subscribe(data1 =>{
      this.inventories=data1;
      // alert(JSON.stringify(data1));
      if(this.inventories.error==true){
        alert(JSON.stringify(this.inventories.message));
        console.log(JSON.stringify(this.inventories.message));
        this.router.navigateByUrl('AddInventoryToMerchant');
      }
      else if(this.inventories.error==false){
        console.log("Login",data1);
        console.log(JSON.stringify(this.inventories.status));
        alert(this.inventories.status);
        this.router.navigateByUrl('Getinventory');
        // localStorage.removeItem("key");
      }
    })
  }
}
