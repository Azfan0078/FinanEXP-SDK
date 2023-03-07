
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from './../inputs/inputs.module';
import { ButtonsModule } from './../buttons/buttons.module';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinConfirmationDialogComponent } from './fin-confirmation-dialog/fin-confirmation-dialog.component';
import { FinTextsModule } from '../texts';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    FinConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FinTextsModule,
    ButtonsModule,
    InputsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
})
export class DialogsModule {}
