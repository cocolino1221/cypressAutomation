/// <reference types="cypress" />

// describe('review', () => {
//   it('sing up ', () => {
//     cy.intercept(
//       'GET',
//       'https://spicy-sauce-be.ensemble-software.dev/api/v1/signup',
//       {
//         fixture: 'signUp.json',
//       },
//     ).as('signup data');
//     cy.visit(
//       'https://spicy-sauce.ensemble-software.dev/signup',
//     ).should('contain.text', '');
//   });
// });
describe('Signup API Test', () => {
  it('API test using fixture', function() {
    
    cy.signupApi();
    

    cy.get('@authToken').then((token) => {
      const requestBody = {

        fixture: 'signUp.json'
        
      };

      const baseUrl = 'https://spicy-sauce-be.ensemble-software.dev';

      cy.request({
        method: 'POST',
        url: `${baseUrl}/api/v1/auth/signup`,
        body: requestBody,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(201);
       
      });
    });
  });
});
