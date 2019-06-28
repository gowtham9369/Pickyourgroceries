import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

interface myCategory{
  
}
@Injectable({
  providedIn: 'root'
})
export class AddinventoryService {

  constructor(private http: HttpClient) { }
  // Get Category Details 
  // get method
  cate(){
    return this.http.get<myCategory>('http://35.163.82.63:8800/pyg/CMS/getProductsCount')
    }
  // get all product details
  // get method
  pro(data1){
    return this.http.get<myCategory>('http://35.163.82.63:8800/pyg/CMS/getProductsByCategoryId/?categoryId='+ data1)
  }
   // get product details
  // get method
  praticulardetails(data2){
    return this.http.get<myCategory>('http://35.163.82.63:8800/pyg/CMS/getProductById/?productId='+ data2)
  }

  // addinventory
  // post method
  addinventory(inventory){
    return this.http.post<myCategory>('http://35.163.82.63:8000/pyg/merchant/addInventoryToMerchant',inventory)
  }
}
