import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudBannerComponent } from './components/cloud-banner/cloud-banner.component';
import { PostComponent } from './components/post/post.component';
import { AttachmentsComponent } from './components/post/attachments/attachments.component';
import { CommentsComponent } from './components/post/comments/comments.component';
import { ReactionsComponent } from './components/post/reactions/reactions.component';
import { ReactionComponent } from './components/post/reactions/reaction/reaction.component';
import { CommentComponent } from './components/post/comments/comment/comment.component';
import { ReviewComponent } from './components/review/review.component';
import { RequestServiceComponent } from './components/request-service/request-service.component';
import { AttachmentModalComponent } from './components/attachment-modal/attachment-modal.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AddCommentComponent } from './components/post/add-comment/add-comment.component';
import { LandingComponent } from './components/landing/landing.component';
import { Nav2Component } from './components/landing/nav2/nav2.component';
import { LoginComponent } from './components/login/login.component';
import { VendorRegisterationComponent } from './components/vendor-register/vendor-register.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { FollowersComponent } from '../Vendor/components/followers/followers.component';
import { FollowerComponent } from '../Vendor/components/followers/follower/follower.component';
import { VendorFollowingVendorComponent } from './components/vendor-following-vendor/vendor-following-vendor.component';
import { DEFAULT_PSM_OPTIONS } from 'angular-password-strength-meter/zxcvbn';
import { DateFormatArabicPipe } from '../Pipes/DateFormatArabic.pipe';
import { TruncatePipe } from '../Pipes/Truncate.pipe';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { EditPostComponent } from '../Vendor/components/edit-post/edit-post.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NullToSpacePipe } from '../Pipes/NullToSpacePipe.pipe';
import { VendorCarouselComponent } from './components/vendor-carousel/vendor-carousel.component';
import { VendorCardComponent } from './components/vendor-card/vendor-card.component';
import { NoResultSearchComponent } from './components/no-result-search/no-result-search.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { RequestServiceCardComponent } from './components/request-service-card/request-service-card.component';
import { GovernoratesMapComponent } from './components/landing/governorates-map/governorates-map.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { WalkthroughComponent } from './components/landing/walkthrough/walkthrough.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    PasswordStrengthMeterModule.forRoot(DEFAULT_PSM_OPTIONS)
  ],
  declarations: [
    TruncatePipe,
    DateFormatArabicPipe,
    NullToSpacePipe,
    CloudBannerComponent,
    PostComponent,
    AttachmentsComponent,
    CommentsComponent,
    ReactionsComponent,
    ReactionComponent,
    CommentComponent,
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
    FollowersComponent,
    FollowerComponent,
    VendorFollowingVendorComponent,
    DeleteModalComponent,
    VendorCarouselComponent,
    VendorCardComponent,
    NoResultSearchComponent,
    CategoryCardComponent,
    RequestServiceCardComponent,
    GovernoratesMapComponent,
    NavBarComponent,
    WalkthroughComponent,
  ],
  providers: [
  ],
  exports: [
    CloudBannerComponent,
    PostComponent,
    AttachmentsComponent,
    CommentsComponent,
    ReactionsComponent,
    ReviewComponent,
    RequestServiceComponent,
    AttachmentModalComponent,
    CarouselComponent,
    InputSelectComponent,
    FooterComponent,
    FollowersComponent,
    FollowerComponent,
    VendorFollowingVendorComponent,
    DateFormatArabicPipe,
    TruncatePipe,
    NullToSpacePipe,
    DeleteModalComponent,
    VendorCardComponent,
    NoResultSearchComponent,
    CategoryCardComponent,
    RequestServiceCardComponent,
    NavBarComponent
  ],

})
export class SharedModule { }
