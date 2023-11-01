import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { VendorsPageComponent } from './components/vendors-page/vendors-page.component';
import { ProfileVendorsideComponent } from './components/profile-vendorside/profile-vendorside.component';
import { VendorCardComponent } from '../Shared/components/vendor-card/vendor-card.component';
import { EditServiceComponent } from './components/edit-service/edit-service.component';
import { FollowersComponent } from './components/followers/followers.component';
//import { PendingComponent } from './components/pending/pending.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ReservationComponent } from './components/reservation/reservation/reservation.component';
import { StatNavComponent } from './components/statistic/stat-nav.component';
import { VendorFormComponent } from './components/vendor-form/vendor-form.component';
import { VendorReviewsComponent } from './components/vendor-reviews/vendor-reviews.component';
import { CreateOfferComponent } from './components/vendor-services/action-buttons/create-offer/create-offer.component';
import { VendorServicesComponent } from './components/vendor-services/vendor-services.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
<<<<<<< HEAD
import { WalletComponent } from './components/wallet/wallet.component';
=======
import { VhomeComponent } from './components/vhome/vhome.component';
>>>>>>> c8887399fa8d39e32113da33dce81d6d76f25598

const vendorRoutes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            { path: '', component: VendorsPageComponent },
            { path: 'profile', component: ProfileVendorsideComponent },
            { path: 'create-offer', component: CreateOfferComponent },
            { path: 'reviews', component: VendorReviewsComponent },
            { path: 'services', component: VendorServicesComponent },
            { path: 'work-history', component: WorkHistoryComponent },
            { path: 'reservation', component: ReservationComponent },
            { path: 'edit-service', component: EditServiceComponent },
           // { path: 'pending', component: PendingComponent },
            { path: 'vendorform', component: VendorFormComponent },
            { path: 'followers', component: FollowersComponent },
            { path: 'stats', component: StatNavComponent },
            { path: 'card', component: VendorCardComponent },
            { path: 'edit', component: ProfileEditComponent },
<<<<<<< HEAD
            { path: 'wallet', component: WalletComponent }
=======
            { path: 'info', component: VhomeComponent },

>>>>>>> c8887399fa8d39e32113da33dce81d6d76f25598
        ]
    }

]

export const VendorRoutes = RouterModule.forChild(vendorRoutes);
