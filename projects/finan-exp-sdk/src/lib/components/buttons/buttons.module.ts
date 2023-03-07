import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FinIconButtonComponent } from './fin-icon-button/fin-icon-button.component';
import { FinButtonComponent } from './fin-button/fin-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FinButtonComponent,
    FinIconButtonComponent
  ],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [
    FinButtonComponent,
    FinIconButtonComponent
  ],
})
export class ButtonsModule {}
