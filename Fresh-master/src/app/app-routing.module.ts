import { authGuard } from './Guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductsDetailsComponent } from './Components/products-details/products-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { ShippingAddressComponent } from './Components/shipping-address/shipping-address.component';
import { AllOrdersComponent } from './Components/all-orders/all-orders.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { CategoryComponent } from './Components/category/category.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { VerifyCodeComponent } from './Components/verify-code/verify-code.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [authGuard], component: HomeComponent, title: 'FreshCart-Home' },
  { path: 'products', canActivate: [authGuard], component: ProductsComponent, title: 'FreshCart-Products' },
  { path: 'Brands', canActivate: [authGuard], component: BrandsComponent, title: 'FreshCart-Brands' },
  { path: 'categories', canActivate: [authGuard], component: CategoryComponent, title: 'FreshCart-Categories' },
  { path: 'Productdetails/:id', canActivate: [authGuard], component: ProductsDetailsComponent, title: 'FreshCart-ProductDetails' },
  { path: 'cart', canActivate: [authGuard], component: CartComponent, title: 'FreshCart-Cart' },
  { path: 'allorders', canActivate: [authGuard], component: AllOrdersComponent, title: 'FreshCart-AllOrders' },
  { path: 'wishList', canActivate: [authGuard], component: WishlistComponent, title: 'FreshCart-WishList' },
  { path: 'Shippinaddress/:cartid', canActivate: [authGuard], component: ShippingAddressComponent, title: 'FreshCart-ShippinAddress' },
  { path: 'login', component: LoginComponent, title: 'FreshCart-Login' },
  { path: 'register', component: RegisterComponent, title: 'FreshCart-Register' },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  },

  { path: 'verifycode', component: VerifyCodeComponent, title: 'Verification' },
  { path: 'resetpassword', component: ResetPasswordComponent, title: 'resetPassword' },
  { path: 'changepassword', component: ChangePasswordComponent, title: 'changepassword' },
  { path: '**', component: NotFoundComponent, title: 'Error Not Found' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
