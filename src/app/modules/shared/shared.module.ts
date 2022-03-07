import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { DisponiblePipe } from './pipes/disponible/disponible.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    DisponiblePipe
  ],
  exports:[
    HeaderComponent,
    DisponiblePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class SharedModule { }
