import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Modules/components/register/register.component';
import { LoginComponent } from './Modules/components/login/login.component';
import { VendorsPageComponent } from './Modules/components/vendors-page/vendors-page.component';
import { VendorProfilePageComponent } from './Modules/components/vendor-profile-page/vendor-profile-page.component';
import { CreateOfferComponent } from './Modules/components/create-offer/create-offer.component';
import { PageNotFoundComponent } from './Modules/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'vendors', component: VendorsPageComponent },
  { path: 'vendor-profile', component: VendorProfilePageComponent },
  { path: 'create-offer', component: CreateOfferComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
