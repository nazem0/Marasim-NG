import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './Services/Auth.service';
import { AuthGuard } from './Guards/user.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './Services/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:InterceptorService,
    multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
