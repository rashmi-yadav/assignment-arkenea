import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home.component';
import { TrusteesComponent } from './trustees.component';
import { ProfessionalsComponent } from './professionals/professionals.component';


@NgModule({
  declarations: [
    HomeComponent,
    TrusteesComponent,
    ProfessionalsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
