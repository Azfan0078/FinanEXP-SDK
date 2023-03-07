import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FinCardComponent } from './fin-card/fin-card.component';
import { ButtonsModule } from './../buttons/buttons.module';
import { FinNewCardComponent } from './fin-new-card/fin-new-card.component';
import { FinanEXPPipesModule } from '../../pipes/finan-exp-pipes.module';


@NgModule({
  declarations: [FinNewCardComponent, FinCardComponent],
  imports: [CommonModule, MatCardModule, FinanEXPPipesModule, ButtonsModule, MatIconModule],
  exports: [FinNewCardComponent, FinCardComponent],
})
export class CardsModule {}
