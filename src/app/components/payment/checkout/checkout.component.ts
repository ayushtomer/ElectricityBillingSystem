import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { StorageService } from '../storage.service';
import { PaymentserviceService } from 'src/app/services/pay/paymentservice.service';
import { TokenStorageService } from 'src/app/services/tokenStorageService/token-storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
flag:boolean=true;
//id=this.pay.getID();
amount;
billid;
phone;
enterotpflag=false;
session;
otpflag:boolean=false;
otp:number;
status;
connectionid;
mainflag=false;
paymentForm: FormGroup;
  constructor(private toast:ToastrService, private pay:PaymentserviceService,private http:HttpClient,private token :TokenStorageService,private formBuilder: FormBuilder,private route:Router) {
    
   
     this.billid=this.pay.billid;
     this.amount=this.pay.billamount;
     console.log(this.amount);
     this.connectionid=pay.connectionid;
   }
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.paymentForm = this.formBuilder.group({
      nameOnCard: ['', [Validators.required,Validators.minLength(1),Validators.pattern('^[A-Za-z][A-Za-z -]*$')]],
      cardNumber: ['', [Validators.required,Validators.minLength(16),Validators.min(1111111111111111),Validators.max(9999999999999999)]],
      expirationMonth: ['', [Validators.required,Validators.minLength(1),Validators.maxLength(2),Validators.min(1),Validators.max(12)]],
      expirationYear: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.min(2021),Validators.max(9999)]],
      cardCVVNumber: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(3),Validators.min(111),Validators.max(999)]]
    });
  }
  paybill(){
    this.toast.success("Card Verified Successfully.. Now you you are just one step away...")
    this.flag=false;
    this.otpflag=true;
    
  }
 
  generateotp(){
    console.log(this.phone);
    this.enterotpflag=true;
    this.otpflag=false;
    this.http.get(`https://2factor.in/API/V1/92b520f2-64a1-11eb-8153-0200cd936042/SMS/+91${this.phone}/AUTOGEN`).subscribe(data=>{console.log(data);
      
      this.session=data;
      console.log(this.session.Details);
      this.session=this.session.Details;
      
      
  });
  }
   // convenience getter for easy access to form fields
 get f() { return this.paymentForm.controls; }
  sendotp(){
    console.log(this.session);
    this.http.get(`https://2factor.in/API/V1/92b520f2-64a1-11eb-8153-0200cd936042/SMS/VERIFY/${this.session}/${this.otp}`).subscribe(data=>{console.log(data);
      
    this.status=data;
    if(this.status.Status=="Success"){
      this.toast.success("OTP Verified");
     this.callService();
    this.otpflag=false;
    this.mainflag=true;
    this.enterotpflag=false;
    }

  },error=>{this.toast.error("Invalid OTP")});
  }
  callService(){
    this.pay.payBill(this.connectionid,this.amount,"card",this.billid,this.token.getUser().username).subscribe(data=>{console.log(data);
      // this.id=this.pay.getID();
      alert("service called");
      });

  }
redirect(){
  this.route.navigateByUrl('showConnection');
}
}
