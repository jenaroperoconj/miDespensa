import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ShareMyDespenseComponent } from './share-my-despense/share-my-despense.component';
import { AddProductComponent } from './add-product/add-product.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'share-my-despense', component: ShareMyDespenseComponent},
  { path: 'add-product', component: AddProductComponent},
  { path: '**', redirectTo: 'home' }
];

export const appRoutingProviders = [provideRouter(routes)];
