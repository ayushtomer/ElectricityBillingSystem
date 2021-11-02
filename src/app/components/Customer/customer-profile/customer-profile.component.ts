import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BillsService } from 'src/app/services/BillService/bill.service';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { TokenStorageService } from "src/app/services/tokenStorageService/token-storage.service";

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  user: any;

  constructor( private fb: FormBuilder,
               private tokenStorage: TokenStorageService,
               private connection: ConnectionService,
               private route: Router,
               private billService: BillsService) { }

  form: FormGroup;
  gender: any;
  address: any;

  connectionsArray: Array<any> = []
  showConnections= false

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
    
    // alert(JSON.stringify(this.user))

    this.gender = this.user.gender;
    
    this.form = this.fb.group({
      name: [this.user.name, Validators.required],
      birthday: [this.user.bDay, Validators.required],
      mobileNumber: [this.user.mobile, Validators.required],
      emailId: [this.user.email, Validators.required],   
      address: [this.user.address, Validators.required]
    })
    
  }

  deleteConnection(index){
    this.connection.deleteConnection(this.connectionsArray[index].meterNumber)
  }

  showAllConnections(){
    this.route.navigateByUrl('showConnection')
  }

  showAllBills(){
    this.billService.setBillsByCustmerId(this.user.email)
    // alert(this.user.email)
  }

  logInIntoView(){
    document.querySelector('.login-details-card').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  // connection-buttons-card
  connectionIntoView(){
    document.querySelector('.connection-buttons-card').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  // bill-buttons-card
  billIntoView(){
    document.querySelector('.bill-buttons-card').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
    paymentIntoView(){
    document.querySelector('.payment-buttons-card').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  paymenthistory(){
    this.route.navigateByUrl('paymenthistory');
  }

}