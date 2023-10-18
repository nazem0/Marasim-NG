import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Shared/components/login/login.component';
import { PageNotFoundComponent } from './Shared/components/page-not-found/page-not-found.component';
import { ContactComponent } from './Shared/components/contact/contact.component';
import { HomeComponent } from './Shared/components/home/home.component';
import { PendingComponent } from './User/components/pending/pending.component';
import { EditServiceComponent } from './Vendor/components/edit-service/edit-service.component';
import { AddServiceComponent } from './Vendor/components/add-service/add-service.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './Services/Auth.service';
import { AuthGuard } from './Guards/user.guard';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    ContactComponent,
    HomeComponent,
    PendingComponent,
    EditServiceComponent,
    AddServiceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
