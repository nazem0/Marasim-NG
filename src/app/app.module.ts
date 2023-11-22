import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './Guards/vendor.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './Services/interceptor.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DateFormatArabicPipe } from './Pipes/DateFormatArabic.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      "titleClass": "text-white",
      "messageClass": "text-white",
      "positionClass": 'toast-bottom-right',
      timeOut: 5000,
      preventDuplicates: true,
      progressBar: true,
      closeButton: true,
      enableHtml: true,
    }),
    
    // for HttpClient use:
    LoadingBarHttpClientModule,

    // for Router use:
    LoadingBarRouterModule,

    // for Core use:
    LoadingBarModule,
  ],
  providers: [AuthGuard,
    // { provide: LOCALE_ID, useValue: "ar-EG" },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
