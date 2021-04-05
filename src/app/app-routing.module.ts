import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { NoPageFoundComponent } from './component/no-page-found/no-page-found.component';
import { ProductDetailComponent } from './component/producto/producto-detail/producto-detail.component';
import { ProductoRoutedPlistComponent } from './component/producto/producto-routed-plist/producto-routed-plist.component';


import { SessionResolver } from './resolve/session.resolve';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'producto/plist', component: ProductoRoutedPlistComponent },
  { path: 'producto/plist/:page', component: ProductoRoutedPlistComponent },
  { path: 'producto/plist/:page/:rpp', component: ProductoRoutedPlistComponent },
  { path: 'producto/plist/:page/:rpp/:sort', component: ProductoRoutedPlistComponent },
  { path: 'producto/plist/:page/:rpp/:sort/:dir', component: ProductoRoutedPlistComponent },
  { path: 'producto/plist/:page/:rpp/:sort/:dir/:filter', component: ProductoRoutedPlistComponent },
  { path: 'producto-detail/:id', component: ProductDetailComponent },
  { path: 'login', component: LoginComponent, resolve: { message: SessionResolver } },
  { path: 'logout', component: LogoutComponent, resolve: { message: SessionResolver } },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  //imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
