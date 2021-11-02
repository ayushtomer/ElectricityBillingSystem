import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from "./components/auth/auth.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { HttpClientModule } from '@angular/common/http';
import { ForgotpasswordComponent } from './components/auth/forgotpassword/forgotpassword.component';
import { CustomerProfileComponent } from './components/Customer/customer-profile/customer-profile.component';
import { AddConnectionComponent } from './components/Connection/add-connection/add-connection.component';
import { ShowConnectionsComponent } from './components/Connection/show-connections/show-connections.component';
import { ViewBillsComponent } from './components/Bill/view-bills/view-bills.component';
import { CheckoutComponent} from './components/payment/checkout/checkout.component'
import { AboutComponent} from './components/about/about.component'
import { ContactusComponent} from './components/contactus/contactus.component'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewAllCustomersComponent } from './components/admin/view-all-customers/view-all-customers.component';
import {  PaymenthistoryComponent} from './components/payment/paymenthistory/paymenthistory.component'
import {  ViewallpaymentsComponent} from './components/payment/viewallpayments/viewallpayments.component';
import { HomeComponent } from './components/home/home.component'
//import { MyMaterialModule } from './material.module';

@NgModule({
  declarations: [
    HomeComponent,
    ViewallpaymentsComponent,
    PaymenthistoryComponent,
    ViewallpaymentsComponent,
    AppComponent,
    AuthComponent,
    FooterComponent,
    HeaderComponent,
    ForgotpasswordComponent,
    CustomerProfileComponent,
    AddConnectionComponent,
    ShowConnectionsComponent,
    ViewBillsComponent,
    CheckoutComponent,
    AboutComponent,
    ContactusComponent,
    ViewAllCustomersComponent,
  ],
  imports: [
    
   // MyMaterialModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
