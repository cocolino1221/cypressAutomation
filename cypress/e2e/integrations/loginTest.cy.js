/// <reference types="cypress" />

import HomePage from '../../pages/HomePage';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('LoginTest', () => {
  const homePage = new HomePage();

  it('Login test with valid credentials', () => {
    cy.loginApi();
    homePage.Open();
    cy.res('._logoImage_1iklq_12').should('be.visible');
  });
  it('Login test with invalid credentials', () => {
    cy.loginApi('coco@gmail.com', 'Tester1!');
    homePage.Open();
    cy.contains('Welcome to the Dashboard').should('be.visible');
  });
  it('Login in UI from homepage', () => {
    homePage.Open();
    cy.get('._avatarImg_1iklq_49').click();
    cy.get('[href="/login"]').click();
    cy.get('[data-testid="login-title"]').should('have.text', 'Log In');
    cy.get('[data-testid="login-title"]').should('be.visible');
    cy.loginValidCredentials('email', 'password');
  });
  it('Login in UI from login page', (loginValidCredentials) => {
    cy.visit('https://spicy-sauce.ensemble-software.dev/login');
    cy.get('[data-testid="login-title"]').should('be.visible');
    cy.loginValidCredentials('email', 'password');
  });
  it('Login in UI from login page with invalid credentials', (loginInvalidCredentials) => {
    cy.visit('https://spicy-sauce.ensemble-software.dev/login');
    cy.get('[data-testid="login-title"]').should('be.visible');
    cy.loginValidCredentials('email', 'password');
    cy.get('._alertRoot_19ojm_18').should('have.text', 'Invalid credentials');
  });
});
