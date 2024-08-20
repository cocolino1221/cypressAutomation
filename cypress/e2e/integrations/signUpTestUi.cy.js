/// <reference types="cypress" />
import HomePage from "../../pages/HomePage";
import SignUpPage from "../../pages/SignUpPage";
import {faker} from '@faker-js/faker'
describe('Sign up from UI', () => {
    const signUpPage = new SignUpPage
    const uniqueEmail = new faker.internet.email()
    it('Sign up', () => {
        signUpPage.open
        signUpPage.fullNameField().type('John')
        signUpPage.fullNameField().contains('John1')
        signUpPage.emailAdress().uniqueEmail()
        signUpPage.passwordField().type('Tester!1')
        signUpPage.confirmPassField().type('Tester!1')
    });
});