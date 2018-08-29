// Not exposed by Cypress
suite = context;
test = it;

describe('Feature: Synonym lookup', () => {
    context('As Sgt Snuffy I want to be able to lookup words to find better synonyms to use', () => {
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
    });
});