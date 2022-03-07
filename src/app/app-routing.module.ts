import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WishlistComponent } from './modules/wishlist/components/wishlist/wishlist.component';

const routes: Routes = [
  {path:'',redirectTo:"products",pathMatch:"full"},
  {path:'products',loadChildren:()=> import('./modules/product/product.module').then(m => m.ProductModule)},
  {path:'wishlist',loadChildren:()=> import('./modules/wishlist/wishlist.module').then(m => m.WishlistModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
