import BlushRadio from './blush-radio.vue'

const props = {
	id: 'radio-id',
	name: 'radio-name',
	label: 'radio label',
	value: 'radio1',
	variant: 'primary',
	state: 'normal',
	disabled: false,
	autofocus: false,
	required: false,
	checked: false,
}

describe('renders', () => {
	it('render blush radio correctly based on provided props', () => {
		cy.mount(BlushRadio, { props })

		cy.get('.blush-radio .input-label .input')
			.should('have.css', 'border-radius', '50%')
			.should('have.css', 'width', '16px')
			.should('have.css', 'height', '16px')
    
		cy.get('.blush-radio .input-label .input').click()
			.should('have.css', 'background-color', 'rgb(214, 162, 53)')
	})

	it('render blush radio hint text if provided', () => {
		cy.mount(BlushRadio, { props: 
      { 
      	...props,
      	hintText: 'Texto de Hint' 
      }
		})

		cy.get('.blush-radio .hint').should('be.visible')
	})

	it('render blush radio error text if provided', () => {
		cy.mount(BlushRadio, { props: 
      { 
      	...props,
      	errorText: 'Texto de Erro' 
      }
		})

		cy.get('.blush-radio .error').should('be.visible')
	})
})

describe('events', () => {
	it('emit onChange event', () => {
		const onChangeSpy = cy.spy().as('onChangeSpy')
		cy.mount(BlushRadio, { props:
      {
      	...props,
      	onChange: onChangeSpy
      },  
		})

		cy.get('.blush-radio .input-label .input').click()
		cy.get('@onChangeSpy').should('have.been.calledOnce')
	})

	it('emit onInput event', () => {
		const onInputSpy = cy.spy().as('onInputSpy')
		cy.mount(BlushRadio, { props:
      {
      	...props,
      	onInput: onInputSpy
      },  
		})

		cy.get('.blush-radio .input-label .input').click()
		cy.get('@onInputSpy').should('have.been.calledOnce')
	})
})
