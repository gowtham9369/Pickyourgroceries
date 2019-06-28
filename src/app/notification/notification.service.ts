import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

interface myData{

}
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }
  getUnapprovedMerchant(){
        return this.http.get<myData>('http://35.163.82.63:8800/pyg/CMS/getUnapprovedMerchants')
  }
  approvemerchant(input){
        return this.http.post("http://35.163.82.63:8800/pyg/CMS/approveMerchant",
        {
          "merchant_id": input,

      })
  }
  rejectmerchant(input){
    return this.http.post("http://35.163.82.63:8800/pyg/CMS/rejectMerchant",
    {
      "merchant_id": input,

  })
  }

  FOLDER = 'jsa-s3/';
  uploadfile(file) {

    const bucket = new S3(
      {
        accessKeyId: 'AKIAIG24L37HE5EPXCLQ',
        secretAccessKey: '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',
        region: 'Asia Pacific (Mumbai)'
      }
    );

    const params = {
      Bucket: 'streetsmartb2/sai',
      Key: this.FOLDER + file.name,
      Body: file
    };

    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }

      console.log('Successfully uploaded file.', data);
      return true;
    });
  }
}
