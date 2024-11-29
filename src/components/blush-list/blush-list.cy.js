import BlushList from './blush-list.vue'

const props = {
	items: [
		{
			key: 'item1',
			text: 'Item 1'
		},
		{
			key: 'item2',
			text: 'Item 2'
		},
		{
			key: 'item3',
			text: 'Item 3'
		},
		{
			key: 'item4',
			text: 'Item 4'
		}
	],
	variant: 'neutral-outline',
	header: 'Header',
	footer: 'Footer'
}

describe('renders', () => {
	it('render blush list style correctly based on provided props', () => {
		cy.mount(BlushList, { 
			props
		})

		cy.get('.blush-list')
			.should('have.css', 'background-color', 'rgb(242, 242, 242)')
			.should('have.css', 'border-color', 'rgb(225, 225, 225)')
			.should('have.css', 'color', 'rgb(100, 100, 100)')
			.should('have.css', 'border-radius', '4px')
	})

	it('render blush list with header if provided', () => {
		cy.mount(BlushList, {
			props,
			slots: {
				header: props.header
			}
		})

		cy.get('.blush-list')
			.find('header').should('be.visible')
	})

	it('render blush list with footer if provided', () => {
		cy.mount(BlushList, {
			props,
			slots: {
				footer: props.footer
			}
		})

		cy.get('.blush-list')
			.find('footer').should('be.visible')
	})
})

