import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Shared/components/register/register.component';
import { LoginComponent } from './Shared/components/login/login.component';
import { PageNotFoundComponent } from './Shared/components/page-not-found/page-not-found.component';
import { ContactComponent } from './Shared/components/contact/contact.component';
import { HomeComponent } from './Shared/components/home/home.component';
import { PendingComponent } from './Shared/components/pending/pending.component';
import { VendorFormComponent } from './Vendor/Components/vendor-form/vendor-form.component';
import { NavBarComponent } from './Shared/components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    ContactComponent,
    HomeComponent,
    PendingComponent,
    VendorFormComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
