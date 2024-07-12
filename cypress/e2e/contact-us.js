///<reference types="Cypress" />


describe("Test Contact Us form via WebdriverUni", () => {
  //beforeEach()
    it("Should be able to submit a succesfull submission via contact us form", () => {
     //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html") 
     cy.get('#contact-us').click({force: true})   
     cy.get('[name="first_name"]').type("John")
     cy.get('[name="last_name"]').type("Wick")
     cy.get('[name="email"]').type("john@gmail.com")
     cy.get('textarea.feedback-input').type("amsbcjhsdbcusjdvjhuiefdj")
     cy.get('[type="submit"]').click()
     
    });
    it("Should not be able to submit a succesfull submission via conatct us form", () => {
        //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html") 
        cy.get('[name="first_name"]').type("John")
        cy.get('[name="last_name"]').type("Wick")
        cy.get('[name="email"]').type("john.com")
        cy.get('textarea.feedback-input').type("amsbcjhsdbcusjdvjhuiefdj")
        cy.get('[type="submit"]').click()
    });
})