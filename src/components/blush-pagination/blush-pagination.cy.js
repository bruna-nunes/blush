import BlushPagination from './blush-pagination.vue'

const props = {
	variant: 'primary',
	totalItems: 101,
	prevNextStyle: 'arrow',
	perPage: 10,
	onPageChange: (page) => console.log('page: ', page),
}

describe('renders', () => {
	it('render blush pagination style correctly based on provided props', () => {
		cy.mount(BlushPagination, { 
			props
		})

		cy.get('.blush-pagination .page:not(.active)')
			.should('have.css', 'background-color', 'rgb(253, 248, 236)')
			.should('have.css', 'border-color', 'rgb(214, 162, 53)')
			.should('have.css', 'color', 'rgb(214, 162, 53)')
			.should('have.css', 'padding', '8px')
			.should('have.css', 'border-radius', '4px')

		cy.get('.blush-pagination .page.active')
			.should('have.css', 'background-color', 'rgb(214, 162, 53)')
			.should('have.css', 'border-color', 'rgb(242, 242, 242)')
			.should('have.css', 'color', 'rgb(242, 242, 242)')
			.should('have.css', 'padding', '8px')
			.should('have.css', 'border-radius', '4px')
	})

	it('should have a prev and next button', () => {
		cy.mount(BlushPagination, { 
			props
		})

		cy.get('.blush-pagination .prev').should('exist')

		cy.get('.blush-pagination .next').should('exist')
	})
})

describe('behaviors', () => {
	it('should have correct number of pages visible', () => {
		cy.mount(BlushPagination, { 
			props
		})

		cy.get('.blush-pagination .page').should('have.length', 6)
	})
})

describe('events', () => {
	it('emit onPageChange event', () => {
		const onPageChangeSpy = cy.spy().as('onPageChangeSpy')
		cy.mount(BlushPagination, { props:
      {
      	...props,
      	onOnPageChange: onPageChangeSpy
      },  
		})

		cy.get('.blush-pagination .page').first().click()
		cy.get('@onPageChangeSpy').should('have.been.calledOnce')
	})
})
