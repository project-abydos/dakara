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

    suite('Scenario: Sgt Snuffy edits the bullet', () => {

      specify('Given: I type in the bullet edit box', () => {
        cy
          .get('.active-bullet-editor')
          .type('- other action stuff; result stuff--impact stuff!');
      });
      
      specify('When I select a word in the edit box', () => {
        
      });

      specify('Then I should see a list of synonyms appear below the edit box', () => {
        
      });

    });
  });
});