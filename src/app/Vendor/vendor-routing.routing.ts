import { VendorPostsComponent } from './components/vendor-posts/vendor-posts.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProfileVendorsideComponent } from './components/profile-vendorside/profile-vendorside.component';
import { EditServiceComponent } from './components/edit-service/edit-service.component';
import { FollowersComponent } from './components/followers/followers.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ReservationComponent } from './components/reservation/reservation/reservation.component';
import { StatNavComponent } from './components/statistic/stat-nav.component';
import { VendorFormComponent } from './components/vendor-form/vendor-form.component';
import { VendorReviewsComponent } from './components/vendor-reviews/vendor-reviews.component';
import { CreateOfferComponent } from './components/vendor-services/action-buttons/create-offer/create-offer.component';
import { VendorServicesComponent } from './components/vendor-services/vendor-services.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { VhomeComponent } from './components/vhome/vhome.component';
import { VendorProfileComponent } from '../Shared/components/vendor-profile/vendor-profile.component';
import { AttachmentModalComponent } from '../Shared/components/attachment-modal/attachment-modal.component';
import { EditServiceAttachmentsComponent } from './components/edit-service-attachments/edit-service-attachments.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
// import { ViewVendorsComponent } from '../User/components/view-vendors/view-vendors.component';

const vendorRoutes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            { path: '', component: VhomeComponent },
            { path: 'profile', component: ProfileVendorsideComponent },
            { path: 'create-offer', component: CreateOfferComponent },
            { path: 'reviews/:page', component: VendorReviewsComponent },
            { path: 'services', component: VendorServicesComponent },
            { path: 'services/edit/:serviceId', component: EditServiceComponent },
            { path: 'services/edit/attachments/:serviceId', component: EditServiceAttachmentsComponent },
            { path: 'posts/:page', component: VendorPostsComponent },
            {path :'posts/edit/:postId',component:EditPostComponent},
            { path: 'reservation', component: ReservationComponent },
            { path: 'vendorform', component: VendorFormComponent },
            { path: 'followers/:page', component: FollowersComponent },
            { path: 'stats', component: StatNavComponent },
            { path: 'edit', component: ProfileEditComponent },
            { path: 'wallet/:page', component: WalletComponent },
            { path: 'info', component: VhomeComponent },
        ]
    }

]

export const VendorRoutes = RouterModule.forChild(vendorRoutes);
