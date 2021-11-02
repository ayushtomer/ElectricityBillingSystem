import { Injectable } from '@angular/core';
import { TokenStorageService } from '../tokenStorageService/token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class RouterAuthService {
  constructor( private tokenStorage: TokenStorageService ) { }

  public isAdminAuthenticated(): boolean {
      
      if(this.tokenStorage.getUser().role === 'ADMIN'){
        return true;
      }
      else{
        return false;
      }
  }

  public isCustomerAuthenticated(): boolean {
    
    // alert(this.tokenStorage.getUser().roles[0])
      if(this.tokenStorage.getUser().role === 'CUSTOMER'){
        return true;
      }
      else{
        return false;
      }
    
     
  }


}