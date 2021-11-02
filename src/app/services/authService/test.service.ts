import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost:7100/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient, private route: Router) { }

  login(credentials): Observable<any> {
    console.log(credentials.value)
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.controls['username'].value,
      password: credentials.controls['password'].value
    }, httpOptions);
  }

  register(user: FormGroup): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      name: user.controls['name'].value,
      mobile: user.controls['mobile'].value,
      username: user.controls['username'].value,
      email: user.controls['email'].value,
      password: user.controls['password'].value,
      gender: user.controls['gender'].value,
      address: user.controls['address'].value
    }, httpOptions);
  }

  forgotPass(email: String):Observable<any>{
    return this.http.get(AUTH_API+"user/resetPassword/"+email, httpOptions);
  }


  users=[]
  
  getAllUsers(){
    return this.users
  }

  setAllUsers(){
    this.users= []
    this.http.get<any>(AUTH_API+"getAllUsers").subscribe(arr => {
      for(var i = 0 ; i < arr.length ; i++){
        this.users.push(arr[i])
      }
      this.route.navigateByUrl("viewusers")
    })
  }

}