

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
	
	
	it('User can delete all to-dos', () => {
	
		

	})


})

