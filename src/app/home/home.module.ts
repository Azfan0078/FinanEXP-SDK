import { FinanEXPComponentsModule } from './../../../projects/finan-exp-components/src/lib/finan-exp-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FinanEXPComponentsModule,
  ]
})
export class HomeModule { }
