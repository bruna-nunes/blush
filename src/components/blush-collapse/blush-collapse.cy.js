import BlushCollapse from './blush-collapse.vue'

const props = {
	name: 'blush-collapse',
	title: 'Título do Collapse',
	variant: 'neutral-outline',
	opened: false,
	accordion: false,
	default: 'Conteúdo do Collapse'
}

describe('renders', () => {
	it('render blush collapse correctly based on provided props', () => {
		cy.mount(BlushCollapse, { 
			props,
			slots: {
				default: props.default
			}
		})

		cy.get('.blush-collapse')
			.should('have.css', 'background-color', 'rgb(242, 242, 242)')
			.should('have.css', 'border-radius', '4px')
	})

	it('render blush collapse content on click', () => {
		cy.mount(BlushCollapse , { 
			props,
			slots: {
				default: props.default
			}
		})

		cy.get('.blush-collapse .main-collapse').should('not.be.visible')
		cy.get('.blush-collapse').realClick()
		cy.get('.blush-collapse .main-collapse').should('be.visible')
	})

	it('not render blush collapse content on click', () => {
		cy.mount(BlushCollapse , { 
			props: {
				...props,
				opened: true
			},
			slots: {
				default: props.default
			}
		})

		cy.get('.blush-collapse .main-collapse').should('be.visible')
		cy.get('.blush-collapse').realClick()
		cy.get('.blush-collapse .main-collapse').should('not.be.visible')
	})
})
