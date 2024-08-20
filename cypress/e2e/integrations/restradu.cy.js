/// <reference types="cypress" />

describe('example to-do app', () => {
   
    it('displays two todo items by default', () => {
      cy.intercept(
        {
          method: 'GET',
          url: 'https://2d528a93-96f9-47a9-9866-ea00ed0ab131.mock.pstmn.io/reviews',
        },
        {
          fixture: 'restaurant.json'
        }
      ).as('review')
      cy.visit('http://localhost:5173/home')
      //cy.get('._restaurantName_9tdww_53').should('be.visible')
    })
  })