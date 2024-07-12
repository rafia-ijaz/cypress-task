/// <reference types="cypress" />

describe('Task HTML Tests', () => {
    before(() => {
      cy.visit('/');
    });
  
    it('should display the correct title', () => {
      cy.title().should('eq', 'Practice Page');
    });
  
    it('should upload an image', () => {
      cy.get('input[type="file"]').attachFile('example.png');
      cy.get('.image-upload-wrapper img').should('be.visible');
    });
  
    it('should open a new tab', () => {
      cy.window().then((win) => {
        cy.stub(win, 'open').as('open');
      });
      cy.get('#opentab').click();
      cy.get('@open').should('be.calledWith', 'https://easygenerator.com', '_blank');
    });
  
    it('should display an alert with the correct message', () => {
      cy.task('readAlertText').then((alertText) => {
        cy.get('#name').type('Test User');
        cy.get('#alertbtn').click();
        cy.on('window:alert', (text) => {
          expect(text).to.contains('Hello Test User, share this practice page and share your knowledge');
        });
      });
    });
  
    it('should display a confirm with the correct message', () => {
      cy.get('#name').type('Test User');
      cy.get('#confirmbtn').click();
      cy.on('window:confirm', (text) => {
        expect(text).to.contains('Hello Test User, Are you sure you want to confirm?');
      });
    });
  
    it('should hide and show the input box', () => {
      cy.get('#hide-textbox').click();
      cy.get('#displayed-text').should('not.be.visible');
      cy.get('#show-textbox').click();
      cy.get('#displayed-text').should('be.visible');
    });
  
    it('should show and hide hover content', () => {
      cy.get('.hover-container').trigger('mouseover');
      cy.get('.hover-content').should('be.visible');
      cy.get('.hover-container').trigger('mouseleave');
      cy.get('.hover-content').should('not.be.visible');
    });
  
    it('should load iframe', () => {
      cy.get('iframe#courses-iframe').should('have.attr', 'src', 'https://easygenerator.com/');
    });
  
    it('should navigate to social media links', () => {
      cy.get('a[href="https://www.facebook.com/easygenerator/"]').should('have.attr', 'target', '_blank');
      cy.get('a[href="https://twitter.com/easygenerator"]').should('have.attr', 'target', '_blank');
      cy.get('a[href="https://www.youtube.com/user/easygenerator"]').should('have.attr', 'target', '_blank');
    });
  });
  