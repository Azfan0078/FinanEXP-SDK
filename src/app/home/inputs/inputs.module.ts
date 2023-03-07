import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsComponent } from './inputs.component';
import { InputsRoutingModule } from './inputs-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FinanEXPComponentsModule } from 'projects/finan-exp-sdk/src/lib/components';

@NgModule({
  declarations: [InputsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FinanEXPComponentsModule,
    InputsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class InputsModule {}
