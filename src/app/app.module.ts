import { ROUTES, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './Pipes/search.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategorySliderComponent } from './Components/category-slider/category-slider.component';
import { MainSliderComponent } from './Components/main-slider/main-slider.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderComponent } from './Components/loader/loader.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductsDetailsComponent } from './Components/products-details/products-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { ToastrModule } from 'ngx-toastr';
import { ShippingAddressComponent } from './Components/shipping-address/shipping-address.component';
import { AllOrdersComponent } from './Components/all-orders/all-orders.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { CategoryComponent } from './Components/category/category.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { VerifyCodeComponent } from './Components/verify-code/verify-code.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NotFoundComponent,
    SearchPipe,
    CategorySliderComponent,
    MainSliderComponent,
    LoaderComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    CartComponent,
    ShippingAddressComponent,
    AllOrdersComponent,
    WishlistComponent,
    CategoryComponent,
    BrandsComponent,
    VerifyCodeComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot()




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
