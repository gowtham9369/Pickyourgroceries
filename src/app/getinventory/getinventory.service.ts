import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

interface getmerchantinventory{

}
@Injectable({
  providedIn: 'root'
})
export class GetinventoryService {

  constructor(private http: HttpClient) { 
  }
  getData(data){
    return this.http.get<getmerchantinventory>('http://35.163.82.63:8080/pyg/user/getInventoryListByMerchantId/?merchantId='+data)
    }
	
	// add category
  downloadData(){
    // alert("input");
    return this.http.post("http://35.163.82.63:8800/pyg/CMS/excelByMerchantId",
    {
      "merchant_id":localStorage.getItem("key")

  })
  }
}
