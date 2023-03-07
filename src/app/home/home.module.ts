import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FinanEXPComponentsModule } from 'projects/finan-exp-sdk/src/lib/components';


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
