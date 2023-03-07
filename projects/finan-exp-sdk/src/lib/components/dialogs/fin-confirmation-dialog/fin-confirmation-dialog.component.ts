import { FinConfirmationDialogFormControls } from './finConfirmationDialogFormControls';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FinConfirmationDialogData } from './finConfirmationDialogData';
import { DialogControlService } from '../../../services/dialogControl/dialog-control.service';
import { SnackBarControlService } from '../../../services/snackBarControl/snack-bar-control.service';

@Component({
  selector: 'fin-confirmation-dialog',
  templateUrl: './fin-confirmation-dialog.component.html',
  styleUrls: ['./fin-confirmation-dialog.component.css'],
})
export class FinConfirmationDialogComponent {
  public message = '';
  public withVerification = false;
  public form!: FormGroup;
  public formControls = FinConfirmationDialogFormControls;
  constructor(
    private dialogRef: MatDialogRef<FinConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FinConfirmationDialogData,
    private formBuilder: FormBuilder,
  ) {
    if (data.message) {
      this.message = data.message;
    }
    if (data.withVerification) {
      this.withVerification = data.withVerification;
    }
    if (this.withVerification) {
      this.createForm();
    }
  }

  public confirm(): void {
    this.dialogRef.close({ confirm: true });
  }
  public cancel(): void {
    this.dialogRef.close({ confirm: false });
  }
  public submitForm() {
    if (this.form.get(this.formControls.confirmationString)?.value === 'Desejo deletar') {
      this.confirm();
    } else {
      this.cancel();
    }
  }
  private createForm() {
    this.form = this.formBuilder.group({});
    this.form.addControl(this.formControls.confirmationString, this.formBuilder.control(null));
  }
}
