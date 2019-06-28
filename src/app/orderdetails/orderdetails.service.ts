import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

interface orderdetails{

}

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  constructor(private http: HttpClient) { }
  getInvoiceData(data){
    return this.http.get<orderdetails>('http://35.163.82.63:8800/pyg/CMS/getOrderById/?orderId='+data)
    }
}
