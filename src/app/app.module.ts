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
import { NavBarComponent } from './Shared/components/nav-bar/nav-bar.component';
import { EditServiceComponent } from './Vendor/Components/edit-service/edit-service.component';
import { AddServiceComponent } from './Vendor/Components/add-service/add-service.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    ContactComponent,
    HomeComponent,
    PendingComponent,
    NavBarComponent,
    EditServiceComponent,
    AddServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
