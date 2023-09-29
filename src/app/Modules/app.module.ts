import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { VendorsPageComponent } from './components/vendors-page/vendors-page.component';
import { VendorProfilePageComponent } from './components/vendor-profile-page/vendor-profile-page.component';
import { CreateOfferComponent } from './components/create-offer/create-offer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserCheckListComponent } from './components/user-check-list/user-check-list/user-check-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    VendorsPageComponent,
    VendorProfilePageComponent,
    CreateOfferComponent,
    PageNotFoundComponent,
    UserCheckListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
