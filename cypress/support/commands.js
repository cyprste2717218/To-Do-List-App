// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add("validateIsChecked", (id) => {
  return cy.get(`#check${id}`)
  .should('have.attr', 'aria-checked', 'true')
  
})

Cypress.Commands.add("validateIsNotChecked", (id) => {
  return cy.get(`#check${id}`)
  .should('have.attr', 'aria-checked', 'false')
  
})

Cypress.Commands.add("addSampleToDosWithText", () => {

    cy.getByData("add-to-do-button").click()
    cy.getByData("add-to-do-button").click()
    cy.getByData("add-to-do-button").click()

		// enter text into existing to-dos
		cy.getByData("to-do-list-item-text-box")
            .eq(0)
            .type('Buy bread and milk')
		cy.getByData("to-do-list-item-text-box")
            .eq(1)
            .type('Play tennis')
		cy.getByData("to-do-list-item-text-box")
            .eq(2)
            .type('Take out the rubbish')

})

Cypress.Commands.add("validateSampleAddedToDos", () => {

    // validate to-dos in initial expected conditions
    cy.getByData("to-do-list-item").should('have.length', 3)
    cy.getByData("to-do-list-item-text-box").each(($el) => {
        cy.wrap($el).should('be.empty');
    });

    cy.getByData("to-do-list-item-text-box")
            .eq(0)
            .should('have.value', 'Buy bread and milk')
		cy.getByData("to-do-list-item-text-box")
            .eq(1)
            .should('have.value', 'Play tennis')
    cy.getByData("to-do-list-item-text-box")
            .eq(2)
            .should('have.value', 'Take out the rubbish')
          
})

Cypress.Commands.add('validateSortingEnabled', () => {
  // validating ordering by completion toggle is enabled
  cy.getByData("more-options-elipsis-button")
  .click()

  cy.getByData("off-canvas-drawer")
  .should('exist')
  cy.getByData("sorting-by-completion-button")
  .should('exist')
  .should('have.attr', 'aria-checked', 'true')

  cy.get('body').click('topRight');
  cy.getByData("off-canvas-drawer").should('not.be.visible');
})

Cypress.Commands.add('setSortingDisabled', () => {
  // validating ordering by completion toggle is enabled
  cy.getByData("more-options-elipsis-button")
  .click()

  cy.getByData("off-canvas-drawer")
  .should('exist')
  cy.getByData("sorting-by-completion-button")
  .should('exist')
  .should('have.attr', 'aria-checked', 'true')

  // disabling ordering by completion
  cy.getByData("sorting-by-completion-button")
			.click()
			.should('have.attr', 'aria-checked', 'false')

  cy.get('body').click('topRight');
  cy.getByData("off-canvas-drawer").should('not.be.visible');
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })