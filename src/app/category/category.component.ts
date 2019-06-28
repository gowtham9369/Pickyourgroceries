import { Component, OnInit,Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CategoryService } from './category.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public categoryCount : any
  public check:any
  public message1:any
  public images:any
  public selectedImage: FileList;
  @Input() addcategories = {
    category_name:"",
    category_img:""
   };

    constructor(private category :CategoryService,private router: Router, private spinner: NgxSpinnerService) { }

getCategoryId(inputID){
  localStorage.setItem("cartegoryid",inputID)
  // alert(inputID)
  this.router.navigateByUrl('ProductList');
}
  ngOnInit() {
            /** spinner starts on init */
            this.spinner.show();
 
            setTimeout(() => {
                /** spinner ends after 5 seconds */
                this.spinner.hide();
            }, 5000);
    this.categoryCount="";
    this.category.categorytemplate().subscribe(data =>{
    this.categoryCount=data;
    console.log("Get Category",data)
    })
  }
  upload(event) {
    this.selectedImage = event.target.files;
    const file = this.selectedImage.item(0);
    this.category.uploadfile(file);
    console.log("file one ",file);
    console.log(JSON.stringify(this.images));
  }  

  uploader(inputname) {
    // alert(inputname);
    this.category.AddCategory(inputname).subscribe(data =>{
      this.check=data;
      if(this.check.error==true){
        this.message1=data;
        alert(JSON.stringify(this.message1.message));
        console.log(JSON.stringify(this.message1.message));
        this.router.navigateByUrl('Category');
        localStorage.removeItem("bucketfile");
      }
      else if(this.check.error==false){
        this.router.navigateByUrl('Dashboard');
        console.log("Success",data);
        this.message1=data;
        console.log(JSON.stringify(this.message1.message));
        alert(this.message1.status);
        localStorage.removeItem("bucketfile");
      }
      })
  }
}
  