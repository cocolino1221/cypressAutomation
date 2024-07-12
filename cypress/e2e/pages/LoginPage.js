class LoginPage {
    usernameInputField (){
       return cy.get('[data-test="username"]')
    }
    passwordInputField(){
        return cy.get('[data-test="password"]')
    }
    loginBtn (){
        return cy.get('[data-test="login-button"]')
    }

}
export default LoginPage;