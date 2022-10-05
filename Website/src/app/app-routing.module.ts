import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ShopComponent } from './components/shop/shop.component';
import { WomensectionComponent } from './components/womensection/womensection.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'about', component: AboutComponent},
  { path: 'policies', component: PoliciesComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'myorders', component: MyordersComponent},
  { path: 'favorites', component: FavoritesComponent},
  { path: 'cart', component: CartComponent},
  { path: 'menSection', component: MensectionComponent},
  { path: 'womenSection', component: WomensectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
