import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { TrusteesComponent } from './trustees.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'trustees',
    component:TrusteesComponent
  },
  {
    path:'professionals',
    component:ProfessionalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
