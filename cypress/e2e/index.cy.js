describe('index page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it('the h1 contains the correct text', () => {
    cy.getByData("hero-heading").contains('To-Dos')
  })

  
})