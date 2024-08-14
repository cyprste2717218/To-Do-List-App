

describe('User can complete operations related to deleting to-dos', () => {

	it('User can delete specific to-dos', () => {
		
		// add-todos
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
            .eq(2)
            .type('Take out the rubbish')

		cy.getByData("to-do-list-item-text-box")
            .eq(0)
            .should('have.value', 'Buy bread and milk')
        cy.getByData("to-do-list-item-text-box")
            .eq(2)
            .should('have.value', 'Take out the rubbish')

		// delete empty to-do and validate this
		cy.getByData('to-do-list-item-delete-button')
			.eq(1)
			.click()

		cy.getByData("to-do-list-item")
			.should('have.length', 2)
		cy.get('#check1')
			.should('exist')
		cy.get('#check3')
			.should('exist')
		cy.get('#check2')
			.should('not.exist')
	
	})
	
	it('User can delete completed to-dos when ordered by completion', () => {
		
		// validating ordering by completion toggle is enabled
		cy.validateSortingEnabled()

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
            .eq(1)
            .type('Play tennis')
		cy.getByData("to-do-list-item-text-box")
            .eq(2)
            .type('Take out the rubbish')

		cy.getByData("to-do-list-item-text-box")
            .eq(0)
            .should('have.value', 'Buy bread and milk')
		cy.getByData("to-do-list-item-text-box")
			.eq(1)
			.should('have.value', 'Play tennis')
        cy.getByData("to-do-list-item-text-box")
            .eq(2)
            .should('have.value', 'Take out the rubbish')

		// checking to-dos and validating this
		cy.getByData("to-do-list-item-checkbox")
			.eq(0)
			.click()
		cy.getByData("to-do-list-item-checkbox")
			.eq(1)
			.click()

		  
        // check intended to-do items are checked
        cy.validateIsChecked(1)
        cy.validateIsChecked(2)

		// delete first two to-dos and validate this
		cy.getByData('to-do-list-item-delete-button')
		.eq(0)
		.click()
		
		cy.getByData('to-do-list-item-delete-button')
		.eq(1)
		.click()

		cy.getByData("to-do-list-item")
			.should('have.length', 1)
		cy.get('#check1')
			.should('not.exist')
		cy.get('#check3')
			.should('not.exist')
		cy.get('#check2')
			.should('exist')


	})
	
})

describe('User can delete all to-dos', () => {
	it('User can delete all to-dos (when some to-dos are checked and ordered)', () => {

		cy.validateSortingEnabled()

		cy.addSampleToDosWithText()
		cy.validateSampleAddedToDos()

		// checking to-dos and validating this
		cy.getByData("to-do-list-item-checkbox")
			.eq(0)
			.click()
		cy.getByData("to-do-list-item-checkbox")
			.eq(1)
			.click()

        cy.validateIsChecked(1)
        cy.validateIsChecked(2)

		// delete all to-dos and validate this
		cy.getByData("more-options-elipsis-button")
			.click()
		cy.getByData("off-canvas-drawer")
			.should('exist')
		cy.getByData('delete-all-to-dos-button')
			.click()

		cy.getByData('to-do-list-item').should('have.length', 0)


		

	})

	it('User can delete all to-dos (when some to-dos are checked and unordered)', () => {
		
		cy.setSortingDisabled()

		cy.addSampleToDosWithText()
		cy.validateSampleAddedToDos()

		// checking to-dos and validating this
		cy.getByData("to-do-list-item-checkbox")
			.eq(0)
			.click()
		cy.getByData("to-do-list-item-checkbox")
			.eq(1)
			.click()

        cy.validateIsChecked(1)
        cy.validateIsChecked(2)

		// delete all to-dos and validate this
		cy.getByData("more-options-elipsis-button")
		.click()
		cy.getByData("off-canvas-drawer")
			.should('exist')
		cy.getByData('delete-all-to-dos-button')
			.click()

		cy.getByData('to-do-list-item').should('have.length', 0)

	})

	it('User can delete all to-dos (when no to-dos are checked and ordered)', () => {
		
		cy.validateSortingEnabled()

		cy.addSampleToDosWithText()
		cy.validateSampleAddedToDos()

		// validating no to-dos are checked
		cy.validateIsNotChecked(1)
        cy.validateIsNotChecked(2)
		cy.validateIsNotChecked(3)
		
		
		// delete all to-dos and validate this
		cy.getByData("more-options-elipsis-button")
		.click()
		cy.getByData("off-canvas-drawer")
			.should('exist')
		cy.getByData('delete-all-to-dos-button')
			.click()

		cy.getByData('to-do-list-item').should('have.length', 0)

	})

	it('User can delete all to-dos (when no to-dos are checked and unordered)', () => {

		cy.setSortingDisabled()

		cy.addSampleToDosWithText()
		cy.validateSampleAddedToDos()

		// validating no to-dos are checked
		cy.validateIsNotChecked(1)
        cy.validateIsNotChecked(2)
		cy.validateIsNotChecked(3)
		
		
		// delete all to-dos and validate this
		cy.getByData("more-options-elipsis-button")
		.click()
		cy.getByData("off-canvas-drawer")
			.should('exist')
		cy.getByData('delete-all-to-dos-button')
			.click()

		cy.getByData('to-do-list-item').should('have.length', 0)

	})

	it('User can delete all to-dos (when all to-dos are checked and ordered)', () => {

		cy.validateSortingEnabled()

		cy.addSampleToDosWithText()
		cy.validateSampleAddedToDos()

		
		// checking to-dos and validating this
		cy.getByData("to-do-list-item-checkbox")
			.eq(0)
			.click()
		cy.getByData("to-do-list-item-checkbox")
			.eq(1)
			.click()
		cy.getByData("to-do-list-item-checkbox")
			.eq(2)
			.click()

        cy.validateIsChecked(1)
        cy.validateIsChecked(2)
		cy.validateIsChecked(3)

		// delete all to-dos and validate this
		cy.getByData("more-options-elipsis-button")
		.click()
		cy.getByData("off-canvas-drawer")
			.should('exist')
		cy.getByData('delete-all-to-dos-button')
			.click()

		cy.getByData('to-do-list-item').should('have.length', 0)

	})

	it('User can delete all to-dos (when all to-dos are checked and unordered)', () => {

		cy.setSortingDisabled()

		cy.addSampleToDosWithText()
		cy.validateSampleAddedToDos()

		// checking to-dos and validating this
		cy.getByData("to-do-list-item-checkbox")
			.eq(0)
			.click()
		cy.getByData("to-do-list-item-checkbox")
			.eq(1)
			.click()
		cy.getByData("to-do-list-item-checkbox")
			.eq(2)
			.click()

        cy.validateIsChecked(1)
        cy.validateIsChecked(2)
		cy.validateIsChecked(3)

		// delete all to-dos and validate this
		cy.getByData("more-options-elipsis-button")
		.click()
		cy.getByData("off-canvas-drawer")
			.should('exist')
		cy.getByData('delete-all-to-dos-button')
			.click()

		cy.getByData('to-do-list-item').should('have.length', 0)


	})

})

