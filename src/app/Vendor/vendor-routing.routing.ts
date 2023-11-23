import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProfileVendorsideComponent } from './components/profile-vendorside/profile-vendorside.component';
import { EditServiceComponent } from './components/vendor-services/action-buttons/edit-service/edit-service.component';
import { FollowersComponent } from './components/followers/followers.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ReservationComponent } from './components/reservation/reservation/reservation.component';
import { StatNavComponent } from './components/statistic/stat-nav.component';
import { VendorFormComponent } from './components/vendor-form/vendor-form.component';
import { VendorReviewsComponent } from './components/vendor-reviews/vendor-reviews.component';
import { CreateOfferComponent } from './components/vendor-services/action-buttons/create-offer/create-offer.component';
import { VendorServicesComponent } from './components/vendor-services/vendor-services.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { VhomeComponent } from './components/vhome/vhome.component';
import { VendorProfileComponent } from '../Shared/components/vendor-profile/vendor-profile.component';
// import { ViewVendorsComponent } from '../User/components/view-vendors/view-vendors.component';

const vendorRoutes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            { path: '', component: VhomeComponent },
            { path: 'profile', component: ProfileVendorsideComponent },
            { path: 'create-offer', component: CreateOfferComponent },
            { path: 'reviews/:page', component: VendorReviewsComponent },
            { path: 'services', component: VendorServicesComponent },
            { path: 'work-history/:page', component: WorkHistoryComponent },
            { path: 'reservation', component: ReservationComponent },
            { path: 'edit-service', component: EditServiceComponent },
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
