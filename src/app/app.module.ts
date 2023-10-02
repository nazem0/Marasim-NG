import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Modules/app.component';
import { RegisterComponent } from './Modules/components/register/register.component';
import { LoginComponent } from './Modules/components/login/login.component';
import { PageNotFoundComponent } from './Modules/components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
