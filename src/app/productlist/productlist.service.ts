import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

interface productList{

}
@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  constructor(private http: HttpClient) { }
    // FOLDER = 'chauffers';
    uploadfile(file) {

      const bucket = new S3(
        {
          accessKeyId: 'AKIAIG24L37HE5EPXCLQ',
          secretAccessKey: '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',
          region: ''
        }
      );
  
      const params = {
        Bucket: 'streetsmartb2/chauffers',
        Key: file.name,
        Body: file
      };
  
      bucket.upload(params, function (err, data) {
        if (err) {
          console.log('There was an error uploading your file: ', err);
          return false;
        }
        console.log('Successfully uploaded file.', data.Location);
        localStorage.setItem("proimage",data.Location)
        return true;
      });
    }

// get product data
  getData(data){
  return this.http.get<productList>('http://35.163.82.63:8800/pyg/CMS/getProductsByCategoryId/?categoryId='+ data)
  }
  // addProducts(payload){
  //   return this.http.post<productList>('http://35.163.82.63:8800/pyg/CMS/addProductToMasterInventory',payload)
  // }
  // Add Product
addProducts(input){
  // alert(JSON.stringify(input));
  return this.http.post("http://35.163.82.63:8800/pyg/CMS/addProductToMasterInventory",
  {
    product_img:localStorage.getItem("proimage"),
    product_name:input.product_name,
    quantification:input.quantification,
    sku:input.sku,
    product_description:input.product_description,
    category_id:input.category_id
})
}
  remove(inputid){
    return this.http.post<productList>("http://35.163.82.63:8800/pyg/CMS/removeProductFromMasterInventory",
    {
      "product_id": inputid,
    })
  }
  categorytemplate(){
    return this.http.get<productList>('http://35.163.82.63:8800/pyg/CMS/getProductsCount')
    }

}
