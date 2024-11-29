import BlushProgress from './blush-progress.vue'

const props = {
	type: 'linear',
	label: 'Progresso xyz',
	size: 'medium',
	variant: 'primary',
	showProgressText: true,
	max: 80,
	value: 20,
}

describe('renders', () => {
	it('render blush progress correctly based on provided props', () => {
		cy.mount(BlushProgress, { props })

		cy.get('.blush-progress .progress')
			.should('have.css', 'background-color', 'rgb(251, 240, 217)')
			.should('have.css', 'border-radius', '8px')
			.should('have.css', 'height', '12px')
    
		cy.get('.blush-progress .progress .fill')
			.should('have.css', 'background-color', 'rgb(214, 162, 53)')
			.should('have.css', 'border-radius', '8px')
			.should('have.attr', 'style', 'width: 25%;')
      
	})

	it('render blush progress with correctly aria values', () => {
		cy.mount(BlushProgress, { props })

		cy.get('.blush-progress .progress .fill')
			.should('have.attr', 'aria-valuemax', '80')
			.should('have.attr', 'aria-valuemin', '0')
			.should('have.attr', 'aria-valuenow', '25')
	})
})
