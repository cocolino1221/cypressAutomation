/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
import {faker} from '@faker-js/faker'

Cypress.Commands.add('loginApi',()  => {
  cy.fixture('loginApi').then((loginApi) => {
    cy.request({
      method: 'POST',
      url: 'https://spicy-sauce-be.ensemble-software.dev/api/v1/auth/login',
      headers: {
        'Content-Type': 'application/json',
      },
      body:{
        email: loginApi.email,
        password: loginApi.password,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      cy.wrap(response.body.token).as('authToken');
    })
  })
  })


Cypress.Commands.add('loginValidCredentials', (email, password) => {
  (email = 'coco1@mail.com'), (password = 'Tester!1');
  cy.get('[data-testid="login-email-input"]').type('coco1@mail.com');
  cy.get('[data-testid="login-password-input"]').type('Tester!1');
  cy.get('[data-testid="login-button"]').click();
});
Cypress.Commands.add('loginInvalidCredentials', (email, password) => {
  (email = 'coc@mail.com'), (password = 'Tester!1');
  cy.get('[data-testid="login-email-input"]').type('coco1@mail.com');
  cy.get('[data-testid="login-password-input"]').type('Tester!1');
  cy.get('[data-testid="login-button"]').click();
  
});


Cypress.Commands.add('signupApi', () => {
  const uniqueEmail = faker.internet.email()
  cy.fixture('signUp').then((signUp) => {
    cy.request({
      method: 'POST',
      url: 'https://spicy-sauce-be.ensemble-software.dev/api/v1/auth/signup',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        id: signUp.id,
        fullName: signUp.fullName,
        email: signUp.email,
        password: signUp.password,
        profilePicturePath: signUp.profilePicturePath,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      cy.wrap(response.body.token).as('authToken');
    });
  });
});


  

// Cypress.Commands.add('dtid', () => {
//   return
//  dtid = new data-testid
// });
