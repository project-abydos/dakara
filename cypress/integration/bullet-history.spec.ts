
// Not exposed by Cypress
suite = context;
test = it;

describe('Feature: Bullet history', () => {
  context('As Sgt Snuffy I want to be able to see the history of the bullet I am working', () => {

    before('Background:', () => {

      cy.visit('/');

      specify('Given: I am on the dakara page', () => {
        test('should see the website', () => cy.document().should('have.property', 'charset'));
      });

      specify('And: I have entered a bullet', () => {
        cy
          .get('.active-bullet-editor')
          .should('have.length', 1)
          .type('- action stuff; result stuff--impact stuff!')
          .type('{enter}');
      });

    });

    suite('Scenario: Sgt Snuffy edits the bullet', () => {

      specify('Given: I type in the bullet edit box', () => {
        cy
          .get('.active-bullet-editor')
          .type('- other action stuff; result stuff--impact stuff!');
      });

      specify('When: I press enter', () => {
        cy.get(`.active-bullet-editor`).type('{enter}');
      });

      test('Then: I should see the old version of the bullet in the history section', () => {
        cy.get('app-text-list').should('contain', 'other action stuff');
      });

      test('But: if I the bullet already exists in the history, nothing happens', () => {
        cy.get('.bullet-entry').should('have.length', 1);
        cy.get(`.active-bullet-editor`).type('{enter}');
        cy.get('.bullet-entry').should('have.length', 1);
      });
    });
  });
});
