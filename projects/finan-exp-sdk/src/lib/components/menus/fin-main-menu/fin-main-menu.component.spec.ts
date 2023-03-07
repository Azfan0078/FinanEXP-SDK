import { NavMenuComponent } from '../menu/nav-menu.component';
import { TestUtils } from './../../../../../../cypress/support/test.utils';

import { FinMainMenuComponent } from './fin-main-menu.component';
import { NavButton } from './navButton';
import { NavItem } from './navItem';

describe('Verify container', () => {
  const navMenuItens = [
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
  ];
  it('Verify populate menu', () => {
    cy.mount(FinMainMenuComponent, {
      componentProperties: {
        isExtended: true,
        navMenuItens: navMenuItens,
        smallScreen: false,
      },
      declarations:[NavMenuComponent]
    });
    cy.get('div#upper').children().should('have.length', navMenuItens.length);
  });

  it('Test retract button', () => {
    cy.mount(FinMainMenuComponent, {
      componentProperties: {
        isExtended: true,
        navMenuItens: navMenuItens,
        smallScreen: false,
      },
    });
    cy.get('button#chevronButton').click();
    cy.get('button#chevronButton mat-icon').should('not.have.class', 'rotated')
    cy.get('mat-sidenav').should('have.css', 'visibility', 'hidden');

    cy.get('button#chevronButton').click();
    cy.get('button#chevronButton mat-icon').should('have.class', 'rotated')
    cy.get('mat-sidenav').should('not.have.css', 'visibility', 'hidden');
  });
});

class PrivateUtils {}
