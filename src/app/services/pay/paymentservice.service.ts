import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PaymentserviceService {

  userName:string;
  role:string;
  connectionid:string;
  billid;
  billamount;
  bill:any

  constructor(private http:HttpClient) { }

 

 
  
 
  public paymentHistorybyconnectionid(customerid:string,connectionid:number):Observable<any>{
    return this.http.get(`http://localhost:7082/payment/paymenthistory/${customerid}/${connectionid}`,{responseType:'text'});
  }
  public allpaymentHistory():Observable<any>{
    return this.http.get("http://localhost:7082/payment/viewallpayments",{responseType:'text'});
  }
  

  public setBillid(bill:any){
      this.billid=bill.billID;
      this.billamount=bill.amount;
      this.connectionid=bill.connectionId;
  
  }
  public getBillid():number{
      return this.billid;
  }
 
  public payBill(id:number,amount:number,mode:string,billid:number,customerid):Observable<any>{
    var result=this.changebillstatus(billid).subscribe(data=>console.log(data));  
    return this.http.post(`http://localhost:7082/payment/pay/${id}/${amount}/${mode}/${billid}/${customerid}`,{responseType:'text'});
  }
  
  public viewpaymentbyid(id:string):Observable<any>{
    return this.http.get(`http://localhost:7082/payment/paymenthistory/${id}`,{responseType:'text'});
    
  }

  public changebillstatus(billid:number):Observable<any>{
    alert("changing status of: "+billid)
    return this.http.get(`http://localhost:7101/bill/changeStatusToPaid/${billid}`,{responseType:'text'});
  }
  
}
