import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillsService } from 'src/app/services/BillService/bill.service';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { TokenStorageService } from 'src/app/services/tokenStorageService/token-storage.service';

@Component({
  selector: 'app-show-connections',
  templateUrl: './show-connections.component.html',
  styleUrls: ['./show-connections.component.css']
})
export class ShowConnectionsComponent implements OnInit {

  connectionsArray = []
  userId: String
  inputLastReading = false
  profile: any
  lastReading: any
  lastReadingPattern = "^[6-9]{*}$";
  showIndex = -1
  errorMessage = ""
  successMessage = ""

  constructor(private token: TokenStorageService, 
              private http: HttpClient, 
              private connect: ConnectionService, 
              private route: Router, 
              private billService: BillsService ) { }

  ngOnInit(): void {
    
    this.userId = this.token.getUser().email
    this.profile = this.token.getUser().role
    this.connectionsArray = []
    if(this.profile === "CUSTOMER"){
      this.http.get<any>("http://localhost:7102/getConnectionByCustomer/"+this.userId).subscribe( arr => {
        for(var i = 0; i < arr.length; i++){
          this.connectionsArray.push(arr[i])
        }
      })
    }   
    if(this.profile === "ADMIN"){
      this.http.get<any>("http://localhost:7102/getAllConnections").subscribe( arr => {
        for(var i = 0; i < arr.length; i++){
          this.connectionsArray.push(arr[i])
        }
      })
    }
  }

  deleteConnection(index){
    this.connect.deleteConnection(this.connectionsArray[index].meterNumber)
  }

  approveConnetion(index){
    this.http.put<any>("http://localhost:7102/approveConnection", this.connectionsArray[index]).subscribe( arr => {
      this.connectionsArray = []
      for(var i = 0; i < arr.length; i++){
        this.connectionsArray.push(arr[i])
      }
      location.reload()
    })
  }

  generateBill(index){

    if(this.lastReading > 0){
      this.http.post<any>("http://localhost:7101/bill/generateBill/"+this.connectionsArray[index].meterNumber+"/"+this.lastReading,this.connectionsArray[index]).subscribe(
        i => {
                this.successMessage = "Bill Generated, Now click on 'VIEW BILL' button."
                this.myFunction2()
              },
        err =>{
            this.errorMessage = JSON.stringify(err.error.message)
            this.myFunction()
      })
    }
    else{
      this.errorMessage = "Invalid Last Reading"
      this.myFunction()
    }

  }

  showInput(index){
    this.lastReading = ""
    this.showIndex = index
  }

  viewBill(index){
    this.billService.setBillConnectionId(this.connectionsArray[index].meterNumber)
  }

  myFunction() {
    this.showIndex = -1
    var x = document.getElementById("error-snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  myFunction2() {
    this.showIndex = -1
    var x = document.getElementById("success-snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4000);
  }

}