import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons.component';
import { FinanEXPComponentsModule } from 'finan-exp-components';


@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    FinanEXPComponentsModule
  ]
})
export class ButtonsModule { }
