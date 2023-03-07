
import { Component } from '@angular/core';
import { NavButton } from 'projects/finan-exp-sdk/src/lib/components/menus/fin-main-menu/navButton';
import { NavItem } from 'projects/finan-exp-sdk/src/lib/components/menus/fin-main-menu/navItem';
import { NavMenuItem } from 'projects/finan-exp-sdk/src/lib/components/menus/fin-main-menu/navMenuItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public navMenuItens: Array<NavMenuItem> = [];

  constructor() {
    this.getNavItens();
  }

  private getNavItens() {
    this.navMenuItens = [
      new NavItem({
        label: 'Inputs',
        routerLink: 'inputs',
        icon: 'input',
        position: 'middle',
      } as NavItem),
      new NavItem({
        label: 'Buttons',
        routerLink: 'buttons',
        icon: 'add',
        position:'middle',
        isBold: false
      } as NavItem),
      new NavButton({
        icon:'add',
        position:'upper',
        clickEvent:() => {
          console.log('teste')
        }
      } as NavButton)
    ]
  }
}
