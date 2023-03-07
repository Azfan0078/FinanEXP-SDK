import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinH3Component } from './fin-h3.component';

describe('FinH3Component', () => {
  it('mount', () => {
    FinH3Component
    cy.mount(FinH3Component, {
      componentProperties:{
        label:'teste'
      }
    })
  })
});
