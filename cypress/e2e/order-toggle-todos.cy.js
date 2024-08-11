describe('User can perform to-do ordering operations', () => {	
	
	it('User can toggle to-dos to or not to display by completion status', () => {
		
		cy.addSampleToDosWithText()
		cy.validateSampleAddedToDos()

		// checking to-dos and validating this
		cy.getByData("to-do-list-item-checkbox")
			.eq(0)
			.click()
		cy.getByData("to-do-list-item-checkbox")
			.eq(2)
			.click()

        cy.validateIsChecked(1)
        cy.validateIsChecked(3)

		cy.validateSortingEnabled()

		// check to-do item order is re-arranged to order checked to-dos before unchecked to-dos
        cy.getByData("to-do-list-item-checkbox")
            .eq(0)
            .should('have.attr', 'aria-checked', 'true')

        cy.getByData("to-do-list-item-checkbox")
            .eq(1)
            .should('have.attr', 'aria-checked', 'true')

		// turn off sorting by completion  and check order is as it was before any to-dos checked
		cy.setSortingDisabled()

		cy.validateIsChecked(1)
        cy.validateIsChecked(3)
		cy.getByData("to-do-list-item-checkbox")
			.eq(0)
			.should('have.attr', 'aria-checked', 'true')

		cy.getByData("to-do-list-item-checkbox")
			.eq(2)
			.should('have.attr', 'aria-checked', 'true')

		
	})


})



