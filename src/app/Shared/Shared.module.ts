import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudBannerComponent } from './components/cloud-banner/cloud-banner.component';
import { PostComponent } from './components/post/post.component';
import { AttachmentsComponent } from './components/post/attachments/attachments.component';
import { CommentsComponent } from './components/post/comments/comments.component';
import { ReactionsComponent } from './components/post/reactions/reactions.component';
import { ReactionComponent } from './components/post/reactions/reaction/reaction.component';
import { CommentComponent } from './components/post/comments/comment/comment.component';
import { VendorCardComponent } from './components/vendor-card/vendor-card.component';
import { ReviewComponent } from './components/review/review.component';
import { RequestServiceComponent } from './components/request-service/request-service.component';
import { AttachmentModalComponent } from './components/attachment-modal/attachment-modal.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { RegisterComponent } from './components/register/register.component';
import {RouterModule} from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AddCommentComponent } from './components/post/add-comment/add-comment.component';
import { LandingComponent } from './components/landing/landing.component';
import { Nav2Component } from './components/landing/nav2/nav2.component';
import { LoginComponent } from './components/login/login.component';
import { VendorRegisterationComponent } from './components/vendor-register/vendor-register.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { FollowersComponent } from '../Vendor/components/followers/followers.component';
import { FollowerComponent } from '../Vendor/components/followers/follower/follower.component';
import { VendorFollowingVendorComponent } from './components/vendor-following-vendor/vendor-following-vendor.component';
import { DEFAULT_PSM_OPTIONS } from 'angular-password-strength-meter/zxcvbn';
import { DateFormatArabicPipe } from '../Pipes/DateFormatArabic.pipe';
import { TruncatePipe } from '../Pipes/Truncate.pipe';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,    
    MatRippleModule,
    PasswordStrengthMeterModule.forRoot(DEFAULT_PSM_OPTIONS)

  ],
  declarations: [
    TruncatePipe,
    DateFormatArabicPipe,
    CloudBannerComponent,
    PostComponent,
    AttachmentsComponent,
    CommentsComponent,
    ReactionsComponent,
    ReactionComponent,
    CommentComponent,
    VendorCardComponent,
    ReviewComponent,
    RequestServiceComponent,
    AttachmentModalComponent,
    CarouselComponent,
    InputSelectComponent,
    LoginComponent,
    RegisterComponent,
    VendorRegisterationComponent,
    AddCommentComponent,
    LandingComponent,
    Nav2Component,
    FooterComponent,
    PaginatorComponent,
    FollowersComponent,
    FollowerComponent,
    VendorFollowingVendorComponent,
    DeleteModalComponent,

  ],
  providers:[
  ],
  exports:[
    CloudBannerComponent,
    PostComponent,
    AttachmentsComponent,
    CommentsComponent,
    ReactionsComponent,
    ReviewComponent,
    RequestServiceComponent,
    VendorCardComponent,
    AttachmentModalComponent,
    CarouselComponent,
    InputSelectComponent,
    FooterComponent,
    PaginatorComponent,
    MatPaginatorModule,
    FollowersComponent,
    FollowerComponent,
    VendorFollowingVendorComponent,
    DateFormatArabicPipe,
    TruncatePipe,
    DeleteModalComponent
  ],

})
export class SharedModule { }
