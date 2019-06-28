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
export class CategoryService {
public iamge:any;
  constructor(private http: HttpClient) { }
  
  categorytemplate(){
  return this.http.get<myCategory>('http://35.163.82.63:8800/pyg/CMS/getProductsCount')
  }

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
      localStorage.setItem("bucketfile",data.Location)
      // alert(JSON.stringify(data.Location));
      this.imagess=localStorage.setItem("bucketfile",data.Location);
      return true;
    });
  }
// add category
  AddCategory(input){
    // alert(input);
    return this.http.post("http://35.163.82.63:8800/pyg/CMS/addCategoryToMasterInventory",
    {
      "category_name": input,
      "category_img":localStorage.getItem("bucketfile")

  })
  }
}


