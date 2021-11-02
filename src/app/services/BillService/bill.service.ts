import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  private BILL_URL = "http://localhost:7101/bill/";

  constructor(private http:HttpClient,
              private route: Router) { }

  billsArray = []
  customerId = ""
  connectionId = ""
  connectionList = []
  
  findAllBills(): Observable<any>{
    return this.http.get<any>(this.BILL_URL+"allbills").pipe(retry(0), catchError((error: HttpErrorResponse) => {
      window.alert(error.error.message);
      return throwError('Error fetching data from serve ');
    }));
  }

  setAllBills(){
    this.findAllBills().subscribe(arr =>{
      this.billsArray = []
      for(var i = 0; i < arr.length ; i++){
        this.billsArray.push(arr[i])
      }
      this.route.navigateByUrl('viewbills')
    })
  }


  setBillConnectionId(connectionId){
    this.connectionList = []
    this.connectionList.push(connectionId)
    // alert(JSON.stringify(this.connectionList))
    this.setBillsByConnections()
  }

  setBillsByCustmerId(customerId){
    this.connectionList = []
    this.setConnectionsByCustomerId(customerId).subscribe(connections => {
      for( var i = 0 ; i < connections.length; i++){
        this.connectionList.push(connections[i].meterNumber)
      }
      this.setBillsByConnections()
    })
  }

  setBillsByConnections(){
    this.billsArray = []
    for(var i = 0; i < this.connectionList.length; i++){
      this.http.get<any>(this.BILL_URL+"billbyConnectionId/"+this.connectionList[i]).subscribe(bills =>{
        for(var i = 0; i < bills.length; i++){
          this.billsArray.push(bills[i])
          // alert(JSON.stringify(bills[i]))
        }
      })
      this.route.navigateByUrl('viewbills')
    }
    
  }

  setConnectionsByCustomerId(customerId): Observable<any>{
    return this.http.get<any>("http://localhost:7102/getConnectionByCustomer/"+customerId).pipe(retry(0), catchError((error: HttpErrorResponse) => {
      window.alert(error.error.message);
      return throwError('Error fetching data from serve ');
    }));

  }

  deleteBill(billId): Observable<any>{
    return this.http.delete(this.BILL_URL+"delete/"+billId);
  }

  getBills(): Array<any>{
    return this.billsArray
  }

}