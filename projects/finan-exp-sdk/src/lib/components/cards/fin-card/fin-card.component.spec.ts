import { TestUtils } from './../../../../../../cypress/support/test.utils';
import { FinCardComponent } from './fin-card.component';
describe('teste', () => {
  it('Mount', () => {
    cy.mount(FinCardComponent, {
      componentProperties: {
        title:TestUtils.mockStrings[0],
        content:TestUtils.mockStrings[0],
        content2:TestUtils.mockStrings[0],
        icon:'add',
        subtitle:TestUtils.mockStrings[0],
        subtitle2:TestUtils.mockStrings[0]
      }
    })
  })
})