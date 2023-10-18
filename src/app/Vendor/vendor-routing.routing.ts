import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { VendorsPageComponent } from './components/vendors-page/vendors-page.component';
import { ProfileVendorsideComponent } from './components/profile-vendorside/profile-vendorside.component';
import { VendorCardComponent } from '../Shared/components/vendor-card/vendor-card.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { EditServiceComponent } from './components/edit-service/edit-service.component';
import { FollowersComponent } from './components/followers/followers.component';
//import { PendingComponent } from './components/pending/pending.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ReservationComponent } from './components/reservation/reservation/reservation.component';
import { StatNavComponent } from './components/statistic/stat-nav.component';
import { VendorFormComponent } from './components/vendor-form/vendor-form.component';
import { VendorReviewsComponent } from './components/vendor-reviews/vendor-reviews.component';
import { CreateOfferComponent } from './components/vendor-services/create-offer/create-offer.component';
import { VendorServicesComponent } from './components/vendor-services/vendor-services.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';

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
            { path: 'add-service', component: AddServiceComponent },
           // { path: 'pending', component: PendingComponent },
            { path: 'vendorform', component: VendorFormComponent },
            { path: 'followers', component: FollowersComponent },
            { path: 'stats', component: StatNavComponent },
            { path: 'card', component: VendorCardComponent },
            { path: 'profile-edit', component: ProfileEditComponent }
        ]
    }

]

export const VendorRoutes = RouterModule.forChild(vendorRoutes);
