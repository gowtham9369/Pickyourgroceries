import { Component, OnInit,Input} from '@angular/core';
import { ProductlistService } from './productlist.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  public categoryByProduct : any
  public getcategoryid:any
  public message:any
  public check:any
  public message1:any
  public categoryCount:any
  public productimages:any
  selectedProduct: FileList;

  @Input() addProduct = {
    product_name:"",
    quantification:"",
    sku:"",
    product_description:"",
    category_id:localStorage.getItem("cartegoryid")
   };

  constructor(private myservice :ProductlistService,private router: Router) {}
  upload(event) {
    this.selectedProduct = event.target.files;
    const file = this.selectedProduct.item(0);
    this.myservice.uploadfile(file);
    console.log("file one ",file);
    console.log(JSON.stringify(this.productimages));
  }
  ngOnInit() {
    this.categoryByProduct="";
    this.getcategoryid= localStorage.getItem("cartegoryid");
    // alert(this.getcategoryid);
    // console.log(this.getcategoryid);
    this.myservice.getData(this.getcategoryid).subscribe(data =>{
    this.categoryByProduct=data;
    //console.log("we Got Products",data)
    // alert(JSON.stringify(data));
    })
    this.myservice.categorytemplate().subscribe(data =>{
      this.categoryCount=data;
      console.log("Get Category",data)
    })
  }

  // Add Product
  uploadProduct() {
    this.myservice.addProducts(this.addProduct).subscribe(data =>{
      this.check=data;
      // alert(JSON.stringify(this.check));
      if(this.check.error==true){
        // console.log("Products post method",data)
        this.message=data;
        alert(this.message.message);
        this.router.navigateByUrl('Category');
        localStorage.removeItem("proimage");
      }
      else if(this.check.error==false){
        // console.log("Products post method",data)
        this.message=data;
        alert(this.message.message);
        this.router.navigateByUrl('Category');
        localStorage.removeItem("proimage");
      }
    })
  }

  // Remove product
  RemoveProduct(product_id){
    this.myservice.remove(product_id).subscribe(data =>{
      this.check=data;
      if(this.check.error==true){
        // console.log("Products post method",data)
        this.message=data;
        alert(this.message.message);
      }
      else if(this.check.error==false){
        // console.log("Products post method",data)
        this.message=data;
        alert(this.message.status);
        this.router.navigateByUrl('Category');
      }
    })
  }
}
