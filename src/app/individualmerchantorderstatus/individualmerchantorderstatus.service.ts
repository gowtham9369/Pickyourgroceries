import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

interface myMerchant{

}
@Injectable({
  providedIn: 'root'
})
export class IndividualmerchantorderstatusService {

  constructor(private http: HttpClient) { 
  }
  getData(data){
  return this.http.get<myMerchant>('http://35.163.82.63:8800/pyg/CMS/getMerchantOrderDetailsRevised?merchant_id='+data)
  }
}
