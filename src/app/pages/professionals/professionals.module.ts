import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalsRoutingModule } from './professionals-routing.module';
import { ProfessionalsComponent } from './professionals.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { BusinessDetailsComponent } from './components/business-details/business-details.component';


@NgModule({
  declarations: [
    ProfessionalsComponent,
    ProfileCardComponent,
    BusinessDetailsComponent
  ],
  imports: [
    CommonModule,
    ProfessionalsRoutingModule
  ]
})
export class ProfessionalsModule { }
