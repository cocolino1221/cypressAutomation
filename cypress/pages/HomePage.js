class HomePage {
    homepageText(){
        return cy.get('[data-testid="navbar-section"]')
    }
    searchBar(){
        return cy.get('._infoField_1yvls_25.m_6c018570 > .m_8fb7ebe7')
    }
    addLocationField(){
        return cy.get('input[placeholder="Add location"]')
    }
    locationDropDownMenu(){
        return cy.get('.m_c0783ff9')
    }
    angularLocation(){
        return cy.get('#:r1h:')
    }
    locationDropDownMenuClick(){
        return cy.get('.m_82577fc2').click()
    }
    Open(){
        return cy.visit('')
    }
    
}
export default HomePage;