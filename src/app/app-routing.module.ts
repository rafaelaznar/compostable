import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { NoPageFoundComponent } from './component/no-page-found/no-page-found.component';
import { ProductDetailComponent } from './component/producto/producto-detail/producto-detail.component';
import { ProductsComponent } from './component/producto/producto-plist/producto-plist.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'producto-plist', component: ProductsComponent },
  { path: 'producto-detail/:id', component: ProductDetailComponent },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
