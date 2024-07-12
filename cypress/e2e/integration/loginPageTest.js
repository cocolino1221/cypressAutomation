///<reference types="Cypress" />
import LoginPage from "../pages/LoginPage"

describe("Login test for Sauce Labs page", () => {
    const loginPage= new LoginPage ()
    //before(()=>
    //    {cy.visitLoginPage ()

    //    })
    it("Login test with valid credentials" ,() => {
        cy.visit("https://www.saucedemo.com/")
        loginPage.usernameInputField().type("standard_user")
        loginPage.passwordInputField().type("secret_sauce")
        loginPage.loginBtn().click()

    })
    
})