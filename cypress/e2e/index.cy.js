describe('index page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it('the h1 contains the correct text', () => {
    cy.getByData("hero-heading").contains('To-Dos')
  })
  it("adds a new to-do list item", () => {
    cy.getByData("add-to-do-button").click()
    cy.getByData("to-do-list-item-text-box").should('be.empty')
  })

  
})