import BlushTooltip from './blush-tooltip.vue'

const props = {
	variant: 'neutral',
	show: 'hover',
	placement: 'bottom',
	content: 'Conteúdo do tooltip',
	default: 'Tooltip'
}

describe('renders', () => {
	it('render blush tooltip on hover', () => {
		cy.mount(BlushTooltip, { 
			props,
			slots: {
				default: props.default
			}
		})

		cy.get('.blush-tooltip .tooltip').should('not.be.visible')
		cy.get('.blush-tooltip').realHover()
		cy.get('.tooltip').should('be.visible')
	})

	it('render blush tooltip style correctly based on provided props', () => {
		cy.mount(BlushTooltip, { 
			props: {
				...props,
				show: 'always'
			},
			slots: {
				default: props.default
			}
		})

		cy.get('.blush-tooltip .tooltip')
			.should('have.css', 'background-color', 'rgb(81, 81, 81)')
			.should('have.css', 'border-color', 'rgb(149, 149, 149)')
			.should('have.css', 'color', 'rgb(242, 242, 242)')
			.should('have.css', 'padding', '4px 0px')
			.should('have.css', 'border-radius', '4px')
	})

	it('render blush list with title if provided', () => {
		cy.mount(BlushTooltip, {
			props: {
				...props,
				show: 'always',
				title: 'Title'
			},
			slots: {
				default: props.default
			}
		})

		cy.get('.blush-tooltip .tooltip .title')
			.should('exist')
			.should('be.visible')
	})
})
