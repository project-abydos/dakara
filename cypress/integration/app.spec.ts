/// <reference path="../../node_modules/cypress/types/index.d.ts" />

describe('An Air Force user', () => {

    before(() => cy.visit('/'));

    it('should see the website', () => cy.document().should('have.property', 'charset'));

    it('with the correct title', () => cy.title().should('eql', 'Dakara'));

    it('and a text box they can type in.', () => {
        cy
            .get('.active-bullet-editor')
            .should('have.length', 1)
            .type('- action stuff; result stuff--impact stuff!');
    });

    it('When they press enter, the bullet should show in the history', () => {
        cy.get('.active-bullet-editor').type('{enter}');
        cy.get('app-text-list').should('contain', 'action stuff');
    });

    it('When they click "Clear History", the bullet history should clear', () => {
        cy.get('.clear-history').click({ force: true });
        cy.get('app-text-list').should('not.contain', 'action stuff');
    });
});
