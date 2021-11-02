import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from 'src/app/model/Bill';
import { TestService } from 'src/app/services/authService/test.service';
import { BillsService } from 'src/app/services/BillService/bill.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  customerId = ""
  connectionId = ""

  constructor( private route: Router, private billService: BillsService, private authService: TestService) { }

  ngOnInit(): void {
  }

  goTo(path: string, type: string){
    this.route.navigateByUrl(path)
  }

  myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  viewBills(){
    this.billService.setAllBills();
  }

  viewAllCustomers(){
    this.authService.setAllUsers()
  }

}