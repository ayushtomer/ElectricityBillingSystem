import { Component, OnInit } from '@angular/core';
import { PaymentserviceService } from 'src/app/services/pay/paymentservice.service';
import { TokenStorageService } from 'src/app/services/tokenStorageService/token-storage.service';
//import { PaymentserviceService } from '../paymentservice.service';
//import {Transaction} from '../transaction';
@Component({
  selector: 'app-paymenthistory',
  templateUrl: './paymenthistory.component.html',
  styleUrls: ['./paymenthistory.component.css']
})
export class PaymenthistoryComponent implements OnInit {
  details;
  search:number;
  constructor(private pay:PaymentserviceService,private token:TokenStorageService) {
   this.pay.viewpaymentbyid(token.getUser().username).subscribe((data)=>{console.log("data" ,data);
    this.details=data;
   // JSON.parse(this.details);
   const l1= JSON.parse(this.details);
   this.details=l1;
    console.log(this.details);
        }
    );
    console.log(token.getUser().username);
   }

  ngOnInit(): void {
  }
  viewbyid(){
  this.pay.paymentHistorybyconnectionid(this.token.getUser().username,this.search).subscribe((data)=>{console.log("data" ,data);
  this.details=data;
 // JSON.parse(this.details);
 const l1= JSON.parse(this.details);
 this.details=l1;
  console.log(this.details);
      }
  );
  //console.log(token.getUser().username);
  }

}
