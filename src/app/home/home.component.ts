import { NavButton } from './../../../projects/finan-exp-components/src/lib/menus/fin-main-menu/navButton';
import { Component } from '@angular/core';
import { NavItem } from 'projects/finan-exp-components/src/lib/menus/fin-main-menu/navItem';
import { NavMenuItem } from 'projects/finan-exp-components/src/lib/menus/fin-main-menu/navMenuItem';

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
        label: 'Gabriel Di Domenico',
        routerLink: 'buttons',
        icon: '',
        position:'down',
        isBold: true
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
