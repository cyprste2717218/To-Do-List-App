describe('index page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it('the h1 contains the correct text', () => {
    cy.get("[data-test='hero-heading']").contains('To-Dos')
  })
  it("adds a new to-do list item", () => {
    cy.get("[data-test='add-to-do-button']").click()
    cy.get("[data-test='to-do-list-item-text-box']").should('be.empty')
  })

  
})