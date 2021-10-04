/// <reference types="cypress"/>

context('Home Page', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })

  it('should render the home page and display a message', () => {
    cy.get('[data-testid="headline"]').contains('Rocket Insurance')

    cy.get('[data-testid="subtext"]').contains('Click below to get started on your quote')
  })

  it('should contain a button that takes user to /rating', () => {
    cy.get('[data-testid="get-started"]').click()

    cy.url().should('include', '/rating')
  })
})
