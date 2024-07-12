import { match } from "assert";

//import LoginPage from "../e2e/pages/LoginPage";
Cypress.Commands.add("login", () => {
  //  cy.visit("/")
  cy.get('[data-test="username"]').type("standard_user")
  cy.get('[data-test="password"]').type("secret_sauce")
  cy.get('[data-test="login-button"]').click()
  
  
});
Cypress.Commands.add("visitLoginPage", () =>{
    cy.visit("/")
    cy.url().should("match","https://www.saucedemo.com/")
})