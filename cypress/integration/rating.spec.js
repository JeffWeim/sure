/// <reference types="cypress"/>

context('Rating Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/rating')
  })

  it('should render the rating page and display a message', () => {
    cy.get('h4').contains('Rating Information')

    cy.get('p').contains('To get started on your quote, please fill out the following information')
  })

  it('should show required errors when user doesn not input values', () => {
    cy.get('[data-testid="rating-continue"]').click()

    cy.get('[data-testid="input-first-name"]').children().should('have.class', 'Mui-error')
    cy.get('[data-testid="input-last-name"]').children().should('have.class', 'Mui-error')
    cy.get('[data-testid="input-address1"]').children().should('have.class', 'Mui-error')
    cy.get('[data-testid="input-address2"]').children().should('not.have.class', 'Mui-error')
    cy.get('[data-testid="input-city"]').children().should('have.class', 'Mui-error')
    cy.get('[data-testid="input-state"]').children().should('have.class', 'Mui-error')
    cy.get('[data-testid="input-zip"]').children().should('have.class', 'Mui-error')
  })

  it('should successfully submit the form when the user inputs values', () => {
    cy.get('[data-testid="input-first-name"]').type('Jeff')
    cy.get('[data-testid="input-last-name"]').type('Weimer')
    cy.get('[data-testid="input-address1"]').type('26371 Via Conchita')
    cy.get('[data-testid="input-city"]').type('Mission Viejo')
    cy.get('[data-testid="input-state"]').type('CA')
    cy.get('[data-testid="input-zip"]').type('92691')

    cy.get('[data-testid="rating-continue"]').click()

    cy.url().should('include', '/quote')
  })

  it('should return a server error when the zip is invalid', () => {
    cy.visit('http://localhost:3000/rating')

    cy.get('[data-testid="input-first-name"]').type('Jeff')
    cy.get('[data-testid="input-last-name"]').type('Weimer')
    cy.get('[data-testid="input-address1"]').type('26371 Via Conchita')
    cy.get('[data-testid="input-city"]').type('Mission Viejo')
    cy.get('[data-testid="input-state"]').type('CA')
    cy.get('[data-testid="input-zip"]').type('sdlfbnsdf')

    cy.get('[data-testid="rating-continue"]').click()

    cy.get('[data-testid="text-invalid-zip"]').should('exist')
  })
})
