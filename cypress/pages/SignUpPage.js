class SignUpPage {
    open(){
        return cy.visit('/signup')
    }
    title(){
       return cy.title('Sign Up')
    }
    addPicture(){
        return cy.get('[data-testid="upload-picture"]')
    }
    fullNameField(){
        return cy.get('[data-testid="signup-username"]')
    }
    userNameError(){
        return cy.get('[data-testid="username-error"]')
    }
    emailAdress(){
        return cy.get('[data-testid="signup-email"]')
    }
    emailError(){
        return cy.get('[data-testid="email-error"]')
    }
    passwordField(){
        return cy.get('[data-testid="signup-password"]')
    }
    passwordError(){
        return cy.get('[data-testid="password-error"]')
    }
    confirmPassField(){
        return cy.get('[data-testid="signup-confirm-password"]')
    }
    confirmPassError(){
        return cy.get('[data-testid="confirm-password-error"]')
    }
    signUpBtn(){
        return cy.get('[data-testid="signup-button"]')
    }
}
export default SignUpPage