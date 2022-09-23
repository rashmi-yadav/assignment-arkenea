import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalsRoutingModule } from './professionals-routing.module';
import { ProfessionalsComponent } from './professionals.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { BusinessDetailsComponent } from './components/business-details/business-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { KeyFormatPipe } from './pipes/key-format.pipe';


@NgModule({
  declarations: [
    ProfessionalsComponent,
    ProfileCardComponent,
    BusinessDetailsComponent,
    KeyFormatPipe
  ],
  imports: [
    CommonModule,
    ProfessionalsRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ProfessionalsModule { }
