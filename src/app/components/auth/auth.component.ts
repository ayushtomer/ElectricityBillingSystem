import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from './mustmatch.validator';
import { TokenStorageService } from "src/app/services/tokenStorageService/token-storage.service";
import { TestService } from 'src/app/services/authService/test.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  container: any;
  registerForm: FormGroup;
  signInForm: FormGroup
  mobnumPattern = "^[7-9][0-9]{9}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
  isSignUpFailed = true;
  errorMessage = '';
  submitted= false;
  signInFormSubmitted = false
  showError: boolean;
  isLoginFailed: boolean;
  isLoggedIn: boolean;
  roles: any;

  constructor(private fb: FormBuilder,
              private authService: TestService,
              private route: Router, 
              private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {

    this.container = document.getElementById('container');

    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email,Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      username:['', [Validators.required, Validators.minLength(6)]],
      address: ['', Validators.required],
      mobile: ['', Validators.required, Validators.maxLength(10),Validators.pattern(this.mobnumPattern)],
      gender: ['', Validators.required]
    }
    , {
      validator: MustMatch('password', 'confirmPassword')
    }
    );

    this.signInForm = this.fb.group({
      password: ['', Validators.required],
      username:['', Validators.required],
    })

  }
  get f() { return this.registerForm.controls; }
  get f2() { return this.signInForm.controls; }

  //________________________________________________________

  // SIGN_UP
  

  onSubmit(){
  
    this.submitted = true;
    // if(this.registerForm.valid){
      this.authService.register(this.registerForm).subscribe(
        () => {
          this.showError = false
          this.isSignUpFailed = false;
          this.registerForm.reset()
          this.route.navigateByUrl('/auth')
        },
        err => {
          this.errorMessage = err.error;
          this.showError = true;
        }
      );
    
  }


  // _______________________________________________________________________

  // SIGN - IN
  signIn() {
    this.signInFormSubmitted = true
    this.authService.login(this.signInForm).subscribe(
      data => {
        
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().role;
        console.log(JSON.stringify(this.tokenStorage.getUser()))
        if(this.roles === 'ADMIN'){
          this.route.navigateByUrl('admin-profile')
        }
        if(this.roles === 'CUSTOMER'){
          this.route.navigateByUrl('profile')
        }
      },
      err => {
        this.errorMessage = JSON.stringify(err);
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }


// ________________________________________________________________________

// USEFULL TRASH 

  myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  function1(){
    this.container.classList.remove('right-panel-active');
  }

  function2(){
    this.container.classList.add('right-panel-active');
  }



}