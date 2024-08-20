/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('add restaurant', () => {
  it('display one restaurant', () => {
    const baseURL = 'https://spicy-sauce-be.ensemble-software.dev/api/v1/restaurants'
    cy.intercept(
      'GET',
      'https://spicy-sauce-be.ensemble-software.dev/api/v1/restaurants/11',
      {
        fixture: 'restaurant.json',
      },
    ).as('restaurant');
    cy.visit(
      'https://spicy-sauce.ensemble-software.dev/restaurants/11',
    ).should('contain.text', '');
  });
});
