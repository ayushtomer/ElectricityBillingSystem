import { Component, OnInit } from '@angular/core';
import { TestService } from "src/app/services/authService/test.service";

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private connect: TestService) { }

  ngOnInit(): void {
  }

  email:String;
  mailSent: boolean;
  msg: String;
  resetPass(){
    this.connect.forgotPass(this.email).subscribe(
      data =>{
        this.msg = data
      }
      ,err =>{
        this.msg = err.error.message;
      }
    )
    this.mailSent = true;
  }

}