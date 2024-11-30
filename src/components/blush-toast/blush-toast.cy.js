import BlushToast from './blush-toast.vue'

const props = {
	title: 'Título do Toast',
	text: 'Texto do toast',
	type: 'informative',
	showDismiss: false
}

describe('renders', () => {
	it('render blush toast correctly based on provided props', () => {
		cy.mount(BlushToast, { props })

		cy.get('.blush-toast')
			.should('have.css', 'background-color', 'rgb(242, 242, 242)')
			.should('have.css', 'border-radius', '4px')
			.should('have.css', 'padding', '12px')
	})
})

describe('events', () => {
	it('emit onDismiss event', () => {
		cy.mount(BlushToast, { props:
      {
      	...props,
      	showDismiss: true,
      },  
		})

		cy.get('.blush-toast .dismiss-icon').click()
			.then(() => {
				cy.wrap(Cypress.vueWrapper.emitted('onDismiss')).should('have.length', 1)
			})
	})
})
