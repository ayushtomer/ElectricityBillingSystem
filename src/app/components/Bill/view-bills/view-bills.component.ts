import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { TokenStorageService } from 'src/app/services/tokenStorageService/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PaymentserviceService } from 'src/app/services/pay/paymentservice.service';
import { trigger, transition, query, style, stagger, animate, keyframes } from '@angular/animations';
import { BillsService } from 'src/app/services/BillService/bill.service';


@Component({
  selector: 'app-view-bills',
  templateUrl: './view-bills.component.html',
  styleUrls: ['./view-bills.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({opacity: 0, transform: 'translateY(-75%)'}), {optional: true}),
        query(':enter', stagger('500ms', [
          animate('500ms ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(-75%),', offset: 0.1, background:''}),
            style({opacity: 1, transform: 'translateY(35px),', offset: 0.8, background:''}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0, background:''}),
          ]))]), {optional: true})
        
      ])
    ])
  ]
})
export class ViewBillsComponent implements OnInit {

  billsArray = []
  userId: String
  profile: any
  showIndex = -1
  customerId = ""
  tobeDeletedBill = {
    billID: "",
    connectionId: "",
    unitsConsumed:"",
    billStatus: "",
    amount: "",
    chargesPerUnit: "",
    dueDate:"",
    currentReading:"",
    previousReading:"",
    billingDate:"",
  }
  successMessage =""
  errorMessage: string;
  nullmsg = ""

  constructor(private token: TokenStorageService,
              private billService: BillsService,
              private router:Router, 
              private payservice:PaymentserviceService) { }

  ngOnInit(): void {
    
    this.userId = this.token.getUser().email
    this.profile = this.token.getUser().role

    this.billsArray = []
    this.billsArray = this.billService.getBills()
    // alert(JSON.stringify(this.billsArray)) 
    if(this.billsArray.length <= 0){
      this.errorMessage = "Please try again, If No Bill is dispalyed"
      this.myFunction()
    }


  }
  checkout(index){
    this.payservice.setBillid(this.billsArray[index]);
    this.router.navigateByUrl("/pay");
  }

  getBillsByCustomerId(){
    this.billService.setBillsByCustmerId(this.customerId)
  } 

  getBillsByConnectionId(){
    this.router.navigateByUrl("viewConnections")
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
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    this.router.navigateByUrl("showConnection")

  }

  setDeleteBill(i){
    this.tobeDeletedBill = i
  }

  deleteBill(){
    this.billService.deleteBill(this.tobeDeletedBill.billID).subscribe()
    this.successMessage = "Bill deleted Successfully"
    // this.myFunction2()
    this.router.navigateByUrl("admin-profile")
  }

  sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 
    /*Make a loop that will continue until no switching has been done:*/
    while (switching) {
      //no switching is done:
      switching = false;
      rows = table.rows;
      for (i = 0; i < rows.length; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        }
        // else if (dir == "desc") {
        //   if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        //     shouldSwitch = true;
        //     break;
        //   }
        // }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
}