import { ButtonsModule } from './../buttons/buttons.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinMainMenuComponent } from './fin-main-menu/fin-main-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavMenuComponent } from './menu/nav-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    FinMainMenuComponent,
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    ButtonsModule
  ],
  exports:[
    FinMainMenuComponent
  ]
})
export class MenusModule { }
