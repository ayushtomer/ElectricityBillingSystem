import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { ViewAllCustomersComponent } from './components/admin/view-all-customers/view-all-customers.component';
import { AuthComponent } from './components/auth/auth.component';
import { ForgotpasswordComponent } from './components/auth/forgotpassword/forgotpassword.component';
import { ViewBillsComponent } from './components/Bill/view-bills/view-bills.component';
import { ShowConnectionsComponent } from './components/Connection/show-connections/show-connections.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CustomerProfileComponent } from './components/Customer/customer-profile/customer-profile.component';
import { HomeComponent } from './components/home/home.component';
import { CheckoutComponent } from './components/payment/checkout/checkout.component';
import { PaymenthistoryComponent } from './components/payment/paymenthistory/paymenthistory.component';
import { ViewallpaymentsComponent } from './components/payment/viewallpayments/viewallpayments.component';
// import { AdminReportsComponent } from "./components/admin/admin-reports/admin-reports.component";
import { AdminAccessGuard } from './RouteGuard/admin-access.guard';
import { CustomerAccessGuard } from './RouteGuard/customer-access.guard';

const routes: Routes = [
  // {path: "reports", component: AdminReportsComponent,canActivate: [AdminAccessGuard]},
  {path: "auth", component: AuthComponent},
  { path: 'forgot', component: ForgotpasswordComponent},
  {path: "profile", component: CustomerProfileComponent, canActivate: [CustomerAccessGuard]},
  {path: "showConnection", component: ShowConnectionsComponent},
  {path: "admin-profile", component: AdminProfileComponent,canActivate: [AdminAccessGuard]},
  // {path: "viewBill", component: ViewBillsComponent},// canActivate: [AdminAccessGuard, CustomerAccessGuard]},
  {path:"pay",component:CheckoutComponent, canActivate: [CustomerAccessGuard]},
  {path:"contactus",component:ContactusComponent},
  {path:"viewbills",component:ViewBillsComponent}, //canActivate: [AdminAccessGuard, CustomerAccessGuard]},
  {path:"viewusers", component:ViewAllCustomersComponent, canActivate: [AdminAccessGuard]},
  {path:"paymenthistory",component:PaymenthistoryComponent, canActivate: [CustomerAccessGuard]},
  {path:'viewallpayments',component:ViewallpaymentsComponent, canActivate: [AdminAccessGuard]},
  {path:'aboutus',component:AboutComponent},
  {path:'',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
