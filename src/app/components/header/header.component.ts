import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { TokenStorageService } from 'src/app/services/tokenStorageService/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private route: Router, private bend: BackendService, private token: TokenStorageService ) { }

  ngOnInit(): void {

    this.userType = this.token.getUser().role
  }

  goTo(path: string){

    if(this.userType === 'CUSTOMER'){
      this.route.navigateByUrl('/profile')
    }

    else{

      if( this.userType === 'ADMIN' ){
        this.route.navigateByUrl("/admin-profile")
      }

      else{
        this.route.navigateByUrl("/auth")
      }
      
    }

  }
  logout(){
    this.token.signOut();
    this.route.navigateByUrl("/")
  }
  userType: any

}
