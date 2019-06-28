import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

interface getCount{

}
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  generalCount(){
  return this.http.get<getCount>('http://35.163.82.63:8800/pyg/CMS/getCounts')
  }
}
