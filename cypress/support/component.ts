// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount, MountConfig } from 'cypress/angular';
import { Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { NavMenuComponent } from 'projects/finan-exp-components/src/lib/menus/menu/nav-menu.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ButtonsModule, CardsModule, DialogsModule, FinCommonModule, InputsModule, MenusModule, SelectModule, TablesModule } from 'projects/finan-exp-components/src/public-api';

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

const imports = [
  CommonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatMenuModule,
  ButtonsModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  CardsModule,
  FinCommonModule,
  DialogsModule,
  InputsModule,
  SelectModule,
  TablesModule,
  MenusModule,
];
/* const declarations = []; */
const providers: any = [];

function customMount<T>(component: string | Type<T>, config?: MountConfig<T>) {
  if (!config) {
    /* config = { declarations }; */
  } else {
    config.declarations = [...(config?.declarations || []), /* ...declarations */];
    config.imports = [...(config?.imports || []), ...imports];
    config.providers = [...(config?.providers || []), ...providers];
  }
  return mount<T>(component, config);
}

Cypress.Commands.add('mount', customMount);

// Example use:
// cy.mount(MyComponent)
