import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationItemsComponent } from './navigation-items/navigation-items.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    NavigationItemsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [NavigationItemsComponent]
})
export class SharedModule { }
