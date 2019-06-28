import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

interface reports{

}
@Injectable({
  providedIn: 'root'
})

export class ReportsService {

  constructor(private http: HttpClient) { }
  getReports(){
  return this.http.get<reports>('http://35.163.82.63:8800/pyg/CMS/getCounts')
  }
}