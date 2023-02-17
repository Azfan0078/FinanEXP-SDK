import { CommonService } from 'finan-exp-services';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogControlService } from './dialogControl/dialog-control.service';
import { SnackBarControlService } from './snackBarControl/snack-bar-control.service';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [
    SnackBarControlService, DialogControlService, CommonService
  ]
})
export class FinanEXPServicesModule { }
