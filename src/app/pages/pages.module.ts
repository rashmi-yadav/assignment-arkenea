import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home.component';
import { TrusteesComponent } from './trustees.component';


@NgModule({
  declarations: [
    HomeComponent,
    TrusteesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
