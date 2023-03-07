import { FinButtonComponent } from './fin-button.component';

describe('Fin Button tests', () => {
  it('Verify button', () => {
    cy.mount(`<fin-button color="primary">teste</fin-button>`, {
      declarations:[FinButtonComponent],
      componentProperties:{
        click: cy.spy().as('mySpy')
      }
    })
    
    cy.get('button').contains('teste')
  })
})