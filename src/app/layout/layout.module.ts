import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderModule } from '../shared/header/header.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HeaderModule,
    MatSidenavModule,
    SharedModule
  ]
})
export class LayoutModule { }
