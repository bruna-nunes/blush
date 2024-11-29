import BlushInputText from './blush-input-text.vue'

const props = {
	id: 'input-id',
	name: 'input-name',
	label: 'Input label',
	size: 'medium',
	state: 'normal',
	placeholder: 'Placeholder',
	disabled: false,
	autofocus: false,
	required: false,
	hintText: '',
	errorText: '',
	minLength: 0,
	maxLength: 100,
	readonly: false
}

describe('renders', () => {
	it('render blush input text correctly based on provided props', () => {
		cy.mount(BlushInputText, { props })

		cy.get('.blush-input-text .input-label .input-content .input')
			.should('have.css', 'border-radius', '4px')
			.should('have.css', 'height', '32px')
    
		cy.get('.blush-input-text .input-label .input-content .input').click()
			.should('have.css', 'background-color', 'rgb(255, 255, 255)')
	})

	it('render blush input text hint text if provided', () => {
		cy.mount(BlushInputText, { props: 
      { 
      	...props,
      	hintText: 'Texto de Hint' 
      }
		})

		cy.get('.blush-input-text .hint')
			.should('be.visible')
			.should('contain', 'Texto de Hint')
	})

	it('render blush input text error text if provided', () => {
		cy.mount(BlushInputText, { props: 
      { 
      	...props,
      	errorText: 'Texto de Erro' 
      }
		})

		cy.get('.blush-input-text .error')
			.should('be.visible')
			.should('contain', 'Texto de Erro')
	})

	it('render blush with state valid', () => {
		cy.mount(BlushInputText, { props: 
      { 
      	...props,
      	state: 'valid' 
      }
		})

		cy.get('.blush-input-text.valid .input-label .input-content .input')
			.should('have.css', 'background-color', 'rgb(238, 247, 245)')
			.should('have.css', 'border-color', 'rgb(61, 171, 149)')
	})

	it('render blush with state invalid', () => {
		cy.mount(BlushInputText, { props: 
      { 
      	...props,
      	state: 'invalid' 
      }
		})

		cy.get('.blush-input-text.invalid .input-label .input-content .input')
			.should('have.css', 'background-color', 'rgb(255, 241, 241)')
			.should('have.css', 'border-color', 'rgb(224, 94, 94)')
	})
})

describe('events', () => {
	it('emit onChange event', () => {
		const onChangeSpy = cy.spy().as('onChangeSpy')
		cy.mount(BlushInputText, { props:
      {
      	...props,
      	onChange: onChangeSpy
      },  
		})

		cy.get('.blush-input-text .input-label .input-content .input').type('Input text').blur()
		cy.get('@onChangeSpy').should('have.been.calledOnce')
	})

	it('emit onInput event', () => {
		const onInputSpy = cy.spy().as('onInputSpy')
		cy.mount(BlushInputText, { props:
      {
      	...props,
      	onInput: onInputSpy
      },  
		})

		cy.get('.blush-input-text .input-label .input-content .input').type('I')
		cy.get('@onInputSpy').should('have.been.calledOnce')
	})

	it('emit onFocus event', () => {
		const onFocusSpy = cy.spy().as('onFocusSpy')
		cy.mount(BlushInputText, { 
			props: {
				...props,
				onOnFocus: onFocusSpy
			},
		})

		cy.get('.blush-input-text .input-label .input-content .input').focus().then(() => {
			cy.get('@onFocusSpy').should('have.been.calledOnce')
		})
   
	})

	it('emit onBlur event', () => {
		const onBlurSpy = cy.spy().as('onBlurSpy')
		cy.mount(BlushInputText, { props:
      {
      	...props,
      	onOnBlur: onBlurSpy
      },  
		})

		cy.get('.blush-input-text .input-label .input-content .input').focus().blur().then(() => {
			cy.get('@onBlurSpy').should('have.been.calledOnce')
		})
    
	})
})
