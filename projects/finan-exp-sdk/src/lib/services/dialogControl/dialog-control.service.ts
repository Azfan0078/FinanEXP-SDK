import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';

import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { FinConfirmationDialogComponent } from '../../components/dialogs';


@Injectable({
  providedIn: 'any',
})
export class DialogControlService {
  dialogRef!: MatDialogRef<unknown>;
  constructor(private dialog: MatDialog) {}

  public openDialog(component: ComponentType<unknown>, configs?: MatDialogConfig) {
    return (this.dialogRef = this.dialog.open(component, {
      ...configs,
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
    }));
  }
  public closeDialog(dialog:MatDialogRef<unknown>, closeData?:any) {
    dialog.close(closeData);
  }
  public openConfirmationDialog(message:string) {
    this.dialog.open(FinConfirmationDialogComponent, {
      width: '400px',
      height: '200px',
      data: {message},
    })
  }
}
