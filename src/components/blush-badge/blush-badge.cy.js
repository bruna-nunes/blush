import BlushBadge from './blush-badge.vue'

const props = {
	text: 'Badge',
	variant: 'primary',
	showDismiss: false
}

describe('renders', () => {
	it('render blush badge correctly based on provided props', () => {
		cy.mount(BlushBadge, { props })

		cy.get('.blush-badge')
			.should('have.css', 'background-color', 'rgb(214, 162, 53)')
			.should('have.css', 'border-radius', '16px')
			.should('have.css', 'color', 'rgb(242, 242, 242)')
			.should('have.css', 'font-size', '12px')
			.should('have.css', 'font-weight', '600')
			.should('have.css', 'padding', '4px 8px')
			.should('have.css', 'height', '24px')
			.should('have.text', props.text)
	})
})

describe('events', () => {
	it('emit onDismiss event', () => {
		cy.mount(BlushBadge, { props:
      {
      	...props,
      	showDismiss: true,
      },  
		})

		cy.get('.blush-badge img.dismiss-icon').click()
			.then(() => {
				cy.wrap(Cypress.vueWrapper.emitted('onDismiss')).should('have.length', 1)
			})
	})
})
