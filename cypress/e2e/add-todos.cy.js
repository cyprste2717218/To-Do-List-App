
describe('adding to-do tests', () => {

    it('User can add and edit to-dos which are re-ordered automatically when checked', () => {
        // navigate to localhost
        cy.visit('http://localhost:5173/')

        // add to-dos
        cy.getByData("add-to-do-button").click()
        cy.getByData("add-to-do-button").click()
        cy.getByData("add-to-do-button").click()

        // validate to-dos in initial expected conditions
        cy.getByData("to-do-list-item").should('have.length', 3)
        cy.getByData("to-do-list-item-text-box").each(($el) => {
            cy.wrap($el).should('be.empty');
        });

        // enter text into existing to-dos and validate this
        cy.getByData("to-do-list-item-text-box")
            .eq(0)
            .type('Buy bread and milk')
        cy.getByData("to-do-list-item-text-box")
            .eq(0)
            .should('have.value', 'Buy bread and milk')

        cy.getByData("to-do-list-item-text-box")
            .eq(1)
            .type('Take out the rubbish')
        cy.getByData("to-do-list-item-text-box")
            .eq(1)
            .should('have.value', 'Take out the rubbish')

        // alter existing to-do text
        cy.getByData("to-do-list-item-text-box")
            .eq(0)
            .invoke('val')
            .then((text) => {
                const newText = 'Buy bread and ';
                cy.getByData("to-do-list-item-text-box")
                    .eq(0)
                    .invoke('val', newText)
                    .should('have.value', 'Buy bread and ');
            })
        cy.getByData("to-do-list-item-text-box")
            .eq(0)
            .type('apples')
        cy.getByData("to-do-list-item-text-box")
            .eq(0)
            .should('have.value', 'Buy bread and apples')

        // add text to third to-do and validate this
        cy.getByData("to-do-list-item-text-box")
            .eq(2)
            .type('Clean the house')
        cy.getByData("to-do-list-item-text-box")
            .eq(2)
            .should('have.value', 'Clean the house')

        // mark to-do items as completed and validate this
        cy.getByData("to-do-list-item-checkbox")
            .eq(0)
            .click()
        cy.getByData("to-do-list-item-checkbox")
            .eq(2)
            .click()
        
        // check intended to-do items are checked
        cy.validateIsChecked(1)
        cy.validateIsChecked(3)

        // check to-do item order is re-arranged to order checked to-dos before unchecked to-dos
        cy.getByData("to-do-list-item-checkbox")
            .eq(0)
            .should('have.attr', 'aria-checked', 'true')

        cy.getByData("to-do-list-item-checkbox")
            .eq(1)
            .should('have.attr', 'aria-checked', 'true')

    
        
        
    })
    
})

