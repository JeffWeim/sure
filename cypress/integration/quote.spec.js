/// <reference types="cypress"/>

context('Quote Page', () => {
  before(() => {
    cy.visit('http://localhost:3000/rating')

    cy.get('[data-testid="input-first-name"]').type('Jeff')
    cy.get('[data-testid="input-last-name"]').type('Weimer')
    cy.get('[data-testid="input-address1"]').type('26371 Via Conchita')
    cy.get('[data-testid="input-city"]').type('Mission Viejo')
    cy.get('[data-testid="input-state"]').type('CA')
    cy.get('[data-testid="input-zip"]').type('92691')

    cy.get('[data-testid="rating-continue"]').click()

    cy.location('pathname', { timeout: 5000 }).should('include', '/quote')
  })

  it('should render the rating page and display a message', () => {
    cy.get('h4').contains('Quote Overview')

    cy.get('[data-testid="test-premium"]').contains('Premium: $27000')
  })

  it('should show the update quote button when toggling a select', () => {
    cy.get('[data-testid="select-deductible"]').click()
    cy.get('[data-value="1000"]').click()

    cy.get('[data-testid="button-update-quote"]').should('exist')
  })

  it('should update the premium value when the update quote button is submitted', () => {
    cy.get('[data-testid="button-update-quote"]').click()

    cy.get('[data-testid="test-premium"]').contains('Premium: $17035.1')
  })
})
