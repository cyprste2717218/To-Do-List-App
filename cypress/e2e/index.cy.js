describe('Navbar renders correctly', () => {
  it('app loads', () => {
    cy.visit("http://localhost:3000")
  })

    it('Navbar exists', () => {
     cy.getByData("to-do-app-header").should('exist')
    })
   


  it('Title exists and contains correct text', () => {
    cy.getByData("hero-heading").contains('To-Dos')
  })

  it('More options button renders', () => {
    cy.getByData("more-options-elipsis-button").should('exist')
  })




 


  
})


describe('other', () => {
  it('Add To-Do button renders', () => {
    cy.getByData("add-to-do-button").should('exist')
  })

  it('Options Drawer renders when pressed', () => {

  })
})