describe('User can add to-dos', () => {
	cy.getByData("add-to-do-button").click()
    cy.getByData("to-do-list-item").should('exist')
    cy.getByData("to-do-list-item-text-box").should('be.empty')
})

describe('User can alter the text of existing to-dos', () => {

})

describe('User can check and uncheck added to-dos', () => {

})