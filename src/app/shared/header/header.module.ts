import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    SharedModule,
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
