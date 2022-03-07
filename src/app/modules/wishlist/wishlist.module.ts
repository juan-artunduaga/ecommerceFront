import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { WishlistRoutingModule } from './wishlist-routing.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    WishlistComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    WishlistRoutingModule,
    SharedModule
  ]
})
export class WishlistModule { }
