import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { RouterAuthService } from "../services/RouteGuard/router-auth.service";

@Injectable({
  providedIn: "root",
})
export class CustomerAccessGuard implements CanActivate {
  constructor(private routeAuth: RouterAuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.routeAuth.isCustomerAuthenticated()) {
      return of(true);
    } else {
      return of(false);
    }
  }
}
