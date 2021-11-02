import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/authService/test.service';
import { BillsService } from 'src/app/services/BillService/bill.service';

@Component({
  selector: 'app-view-all-customers',
  templateUrl: './view-all-customers.component.html',
  styleUrls: ['./view-all-customers.component.css']
})
export class ViewAllCustomersComponent implements OnInit {

  constructor(private authService: TestService, private billsService: BillsService) { }

  users: any

  ngOnInit(): void {
    this.users = this.authService.getAllUsers()
  }

  setCustomerBills(index){
    this.billsService.setBillsByCustmerId(this.users[index].email)
  }

}