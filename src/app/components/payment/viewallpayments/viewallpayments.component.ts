import { Component, OnInit } from '@angular/core';
import { PaymentserviceService } from 'src/app/services/pay/paymentservice.service';
//import { PaymentserviceService } from '../paymentservice.service';

@Component({
  selector: 'app-viewallpayments',
  templateUrl: './viewallpayments.component.html',
  styleUrls: ['./viewallpayments.component.css']
})
export class ViewallpaymentsComponent implements OnInit {
details;
search;
  constructor(private pay:PaymentserviceService) { 
    this.pay.allpaymentHistory().subscribe((data)=>{console.log("data" ,data);
    const d=JSON.parse(data);
    this.details=d;
  }
  
)
  }
  viewbyid(){
   this.pay.viewpaymentbyid(this.search).subscribe((data)=>{console.log("data" ,data);
   const d=JSON.parse(data);
   this.details=d;
 }
);
  }

  ngOnInit(): void {
  }

}
