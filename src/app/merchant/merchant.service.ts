import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

interface allMerchant{

}
@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor(private http: HttpClient) { }
  getMerchant(){
  return this.http.get<allMerchant>('http://35.163.82.63:8800/pyg/CMS/getAllMerchants')
  }
}
