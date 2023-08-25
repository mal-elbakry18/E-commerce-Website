import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MensectionComponent } from './components/mensection/mensection.component';
import { MyordersComponent } from './components/myorders/myorders.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RegisterComponent } from './components/register/register.component';
import { ShopComponent } from './components/shop/shop.component';
import { WomensectionComponent } from './components/womensection/womensection.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'shop', component: ShopComponent,canActivate:[AuthGuard]},
  { path: 'about', component: AboutComponent},
  { path: 'policies', component: PoliciesComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cart', component: CartComponent,canActivate:[AuthGuard]},
  { path: 'menSection', component: MensectionComponent, canActivate:[AuthGuard]},
  { path: 'womenSection', component: WomensectionComponent, canActivate:[AuthGuard]},
  { path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
