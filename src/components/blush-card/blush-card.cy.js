import BlushCard from './blush-card.vue'

const props = {
	title: 'Título do card',
	subtitle: 'Subtítulo do card',
	variant: 'neutral-outline',
	imageSrc: 'https://picsum.photos/600/300/?image=25',
	imageAlt: 'Alt da imagem',
	imagePlacement: 'top',
	style: 'max-width: 20rem',
	content: 'Conteúdo do card',
	header: '<span>Header</span>',
	footer: '<span>Footer</span>'
}

describe('renders', () => {
	it('render blush card correctly based on provided props', () => {
		cy.mount(BlushCard, { 
			props
		})

		cy.get('.blush-card')
			.should('have.css', 'background-color', 'rgb(242, 242, 242)')
			.should('have.css', 'border-radius', '4px')
			.should('have.css', 'color', 'rgb(55, 55, 55)')
			.should('have.attr', 'style', 'max-width: 20rem;')

	})

	it('render blush card image if provided and in correct place', () => {
		cy.mount(BlushCard, {
			props,
		})

		cy.get('.blush-card')
			.find('img').should('be.visible')
			.should('have.class', 'image-top')
	})

	it('render blush card with footer if provided', () => {
		cy.mount(BlushCard, {
			props,
			slots: {
				footer: props.footer
			}
		})

		cy.get('.blush-card')
			.find('footer').should('be.visible')
	})

	it('render blush card with header if provided', () => {
		cy.mount(BlushCard, {
			props,
			slots: {
				header: props.header
			}
		})

		cy.get('.blush-card')
			.find('header').should('be.visible')
	})

	it('render blush card with content if provided', () => {
		cy.mount(BlushCard, {
			props,
			slots: {
				content: props.content
			}
		})

		cy.get('.blush-card')
			.find('.content').should('be.visible')
	})
})
