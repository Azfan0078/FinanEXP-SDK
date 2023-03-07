import { FinIconButtonComponent } from './fin-icon-button.component';
describe('Fin Button tests', () => {
  it('Verify button', () => {
    cy.mount(FinIconButtonComponent, {
      declarations:[FinIconButtonComponent],
      componentProperties:{
        icon: 'add'
      }
    })
    
    cy.get('button')
    cy.get('button mat-icon').contains('add')
  })
})