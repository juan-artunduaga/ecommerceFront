import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ProductComponent,
    ProductsListComponent,
    ProductDetailComponent,
    
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule
    
  ]
})
export class ProductModule { }
