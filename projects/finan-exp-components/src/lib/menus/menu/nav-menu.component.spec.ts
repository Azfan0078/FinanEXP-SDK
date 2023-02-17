import { NavMenuComponent } from 'projects/finan-exp-components/src/lib/menus/menu/nav-menu.component';
import { TestUtils } from './../../../../../../cypress/support/test.utils';
import { NavMenuItem } from 'projects/finan-exp-components/src/lib/menus/fin-main-menu/navMenuItem';
import { NavButton } from '../fin-main-menu/navButton';
import { NavItem } from '../fin-main-menu/navItem';

describe('Verify populate menu', () => {
  it('Mounts', () => {
    cy.mount(NavMenuComponent, {
      componentProperties: {
        navMenuItens: PrivateUtils.navMenuItens,
        smallScreen: false,
      }
    });
    cy.get('div#upper').children().should('have.length', PrivateUtils.upperNavMenuItens.length)
    cy.get('div#middle').children().should('have.length', PrivateUtils.middleNavMenuItens.length)
    cy.get('div#down').children().should('have.length', PrivateUtils.downNavMenuItens.length)
  });
});


class PrivateUtils {
  public static upperNavMenuItens:Array<NavMenuItem> = [
    new NavButton({
      icon: 'add',
      position: 'upper',
      clickEvent: () => {
        console.log('teste');
      },
    } as NavButton),
    new NavItem({
      label: TestUtils.mockStrings[0],
      routerLink: '',
      icon: 'input',
      position: 'upper',
    } as NavItem),
    new NavItem({
      label: TestUtils.mockStrings[1],
      routerLink: '',
      icon: '',
      position: 'upper',
    } as NavItem),
  ]
  public static middleNavMenuItens:Array<NavMenuItem> = [
    new NavButton({
      icon: 'delete',
      position: 'middle',
      clickEvent: () => {
        console.log('teste');
      },
    } as NavButton),
    new NavItem({
      label: TestUtils.mockStrings[0],
      routerLink: '',
      icon: 'input',
      position: 'middle',
    } as NavItem),
    new NavItem({
      label: TestUtils.mockStrings[1],
      routerLink: '',
      icon: '',
      position: 'middle',
    } as NavItem),
  ]
  public static downNavMenuItens:Array<NavMenuItem> = [
    new NavButton({
      icon: 'archive',
      position: 'down',
      clickEvent: () => {
        console.log('teste');
      },
    } as NavButton),
    new NavItem({
      label: TestUtils.mockStrings[0],
      routerLink: '',
      icon: 'input',
      position: 'down',
    } as NavItem),
    new NavItem({
      label: TestUtils.mockStrings[1],
      routerLink: '',
      icon: '',
      position: 'down',
      isBold:true
    } as NavItem),
  ]

  public static get navMenuItens():Array<NavMenuItem> {
    const itens:Array<NavMenuItem> = []
    return itens.concat(this.upperNavMenuItens, this.middleNavMenuItens, this.downNavMenuItens)
  }
}