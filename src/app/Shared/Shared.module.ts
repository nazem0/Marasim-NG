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
import { AcceptRejectVendorComponent } from './components/accept-reject-vendor/accept-reject-vendor.component';


@NgModule({
  imports: [
    CommonModule
    
  ],
  declarations: [
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
    AcceptRejectVendorComponent
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
    AcceptRejectVendorComponent
  ]
})
export class SharedModule { }
