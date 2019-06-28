import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

interface loginModule{

}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
login(payload){
  return this.http.post<loginModule>('http://35.163.82.63:8800/pyg/CMS/loginAdmin',payload)
}
}
