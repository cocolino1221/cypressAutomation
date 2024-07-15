///<reference types="Cypress" />
import LoginPage from "../pages/LoginPage"

describe("Login test for Sauce Labs page", () => {
    const loginPage= new LoginPage ()
    //before(()=>
    //    {cy.visitLoginPage ()

    //    })
    it("Login test with valid credentials" ,() => {
        cy.visit("https://www.saucedemo.com/")
        //cy.get('[data-test="username"]')
        //cy.get('[data-test="password"]')
       // cy.get('[data-test="login-button"]')
       loginPage.usernameInputField().type("standard_user")
        loginPage.passwordInputField().type("secret_sauce")
        loginPage.loginBtn().click()

    })
    
})