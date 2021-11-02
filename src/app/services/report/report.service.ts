import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private url="http://localhost:8084/report/";

  handleError(error: HttpErrorResponse) {
    let errorMessage:any;
    if (error.error instanceof ErrorEvent)
      errorMessage = `Error: ${error.error.message}`;
    else {
      if (error.status == 0)
        errorMessage = `Server Not Accessible! It Might be off.`
      else
        errorMessage = `${error.status}: ${error.statusText}`;
      return throwError(errorMessage);
    }
  }
  
  constructor(private http: HttpClient) { }

  public billsGenereted(from:string, to:string,status:string){
    return this.http.get(this.url+`billGenereated/${from}/${to}/${status}`). pipe(retry(0), catchError(this.handleError));
  }

  public billsGeneretedOn(date:string,status:string){
    return this.http.get(this.url+`billGenereatedOn/${date}/${status}`).pipe(retry(0), catchError(this.handleError));
  }

  public unitsConsumed(from:string,to:string){
    return this.http.get(this.url+`unitsConsumed/${from}/${to}`). pipe(retry(0), catchError(this.handleError));

  }
  public paymentsMade(from:string,to:string){
    return this.http.get(this.url+`paymentsMade/${from}/${to}`). pipe(retry(0), catchError(this.handleError));
    
  }
  public paymentsMadeOn(date:string){
    return this.http.get(this.url+`paymentsMadeOn/${date}`). pipe(retry(0), catchError(this.handleError));
    
  }
  public connectionMade(from:string,to:string){
    return this.http.get(this.url+`connectionMade/${from}/${to}`). pipe(retry(0), catchError(this.handleError));
    
  }
   public connectionMadeOn(date:string){
    return this.http.get(this.url+`connectionMadeOn/${date}`). pipe(retry(0), catchError(this.handleError));
  }
}
