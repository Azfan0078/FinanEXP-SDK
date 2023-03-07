import { ButtonsRoutingModule } from './buttons-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons.component';
import { FinanEXPComponentsModule } from 'projects/finan-exp-sdk/src/lib/components';

@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    FinanEXPComponentsModule,
    MatIconModule,
    ButtonsRoutingModule
  ]
})
export class ButtonsModule { }
