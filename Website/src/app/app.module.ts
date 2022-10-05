import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { FeaturedProductComponent } from './components/featured-product/featured-product.component';
import { HomeSectionsComponent } from './components/home-sections/home-sections.component';
import { BestsellerProductComponent } from './components/bestseller-product/bestseller-product.component';
import { ShopComponent } from './components/shop/shop.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { LoginComponent } from './components/login/login.component';
import { MyordersComponent } from './components/myorders/myorders.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { CartComponent } from './components/cart/cart.component';
import { FavoritesProductsComponent } from './components/favorites-products/favorites-products.component';
import { MensectionComponent } from './components/mensection/mensection.component';
import { WomensectionComponent } from './components/womensection/womensection.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    FeaturedProductComponent,
    HomeSectionsComponent,
    BestsellerProductComponent,
    ShopComponent,
    PoliciesComponent,
    ContactPageComponent,
    LoginComponent,
    MyordersComponent,
    FavoritesComponent,
    CartComponent,
    FavoritesProductsComponent,
    MensectionComponent,
    WomensectionComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
