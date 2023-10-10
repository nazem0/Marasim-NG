import { Routes, RouterModule } from '@angular/router';
import { GeneratedPackagesComponent } from './components/generated-packages/generated-packages.component';
import { GeneratePackagesComponent } from './components/generate-packages/generate-packages.component';
import { InvitationComponent } from './components/invitation/Invitation.component';
import { UserEditProfileComponent } from './components/edit-profile/edit-profile.component';
import { InvitationListComponent } from './components/invitation-list/invitation-list.component';
import { UserCheckListComponent } from './components/user-check-list/user-check-list.component';
import { UserProfileEditComponent } from './components/user-profile-edit/user-profile-edit.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from '../Shared/components/home/home.component';
import { ContactComponent } from '../Shared/components/contact/contact.component';
import { LoginComponent } from '../Shared/components/login/login.component';
import { RegisterComponent } from '../Shared/components/register/register.component';

const routes: Routes = [
  {
    path:'',component:LayoutComponent,children:[
      { path: 'check-list', component: UserCheckListComponent },
      { path: 'invitation-list', component: InvitationListComponent },
      { path: 'edit', component: UserEditProfileComponent },
      // { path: 'profile-edit', component: UserProfileEditComponent }, //to vendor
      { path: 'invitation', component: InvitationComponent },
      {path:'generate-packages',component:GeneratePackagesComponent},
      {path:'generated-packages',component:GeneratedPackagesComponent},
      {path:'',component:HomeComponent},
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'contact', component: ContactComponent },
    ]
  }

];

export const UserRoutes = RouterModule.forChild(routes);
