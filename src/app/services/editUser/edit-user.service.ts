import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

const AUTH_API = 'https://yugun-airways-auth/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  constructor(private http: HttpClient) { }

  editUser(user: FormGroup): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      name: user.controls['name'].value,
      mobile: '',
      username: user.controls['username'].value,
      email: user.controls['email'].value,
      password: user.controls['password'].value,
      gender: "",
      maritalSrarus: "",
      bDay: "",
    }, httpOptions);
  }
}
