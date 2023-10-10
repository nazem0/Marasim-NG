import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudBannerComponent } from './components/cloud-banner/cloud-banner.component';
import { AttachmentsComponent } from './post/attachments/attachments.component';
import { CommentsComponent } from './post/comments/comments.component';
import { PostComponent } from './post/post.component';
import { ReactionsComponent } from './post/reactions/reactions.component';


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
  ],
  providers:[
  ],
  exports:[
    CloudBannerComponent,
    PostComponent,
    AttachmentsComponent,
    CommentsComponent,
    ReactionsComponent,
  ]
})
export class SharedModule { }
