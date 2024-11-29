import BlushSelect from './blush-select.vue'

const props = {
	id: 'select-id',
	name: 'select-name',
	label: 'Select label',
	size: 'medium',
	state: 'normal',
	placeholder: 'Placeholder',
	disabled: false,
	hintText: '',
	errorText: '',
	readonly: false,
	multiple: false,
	default: `
    <option value="1">Opção 1</option>
    <option value="2">Opção 2</option>
    <option value="3">Opção 3</option>
    <option value="4">Opção 4</option>
    <option value="5">Opção 5</option>
    <option value="6">Opção 6</option>
  `
}

describe('renders', () => {
	it('render blush select correctly based on provided props', () => {
		cy.mount(BlushSelect, { props })

		cy.get('.blush-select .select-content .custom-select-display')
			.should('have.css', 'border-radius', '4px')
			.should('have.css', 'height', '32px')
	})

	it('render blush select hint text if provided', () => {
		cy.mount(BlushSelect, { props: 
      { 
      	...props,
      	hintText: 'Texto de Hint' 
      }
		})

		cy.get('.blush-select .hint')
			.should('be.visible')
			.should('contain', 'Texto de Hint')
	})

	it('render blush select error text if provided', () => {
		cy.mount(BlushSelect, { props: 
      { 
      	...props,
      	errorText: 'Texto de Erro' 
      }
		})

		cy.get('.blush-select .error')
			.should('be.visible')
			.should('contain', 'Texto de Erro')
	})

	it('render blush select with state valid', () => {
		cy.mount(BlushSelect, { props: 
      { 
      	...props,
      	state: 'valid' 
      }
		})

		cy.get('.blush-select  .select-content .custom-select-display')
			.should('have.css', 'background-color', 'rgb(238, 247, 245)')
			.should('have.css', 'border-color', 'rgb(61, 171, 149)')
	})

	it('render blush select with state invalid', () => {
		cy.mount(BlushSelect, { props: 
      { 
      	...props,
      	state: 'invalid' 
      }
		})

		cy.get('.blush-select  .select-content .custom-select-display')
			.should('have.css', 'background-color', 'rgb(255, 241, 241)')
			.should('have.css', 'border-color', 'rgb(224, 94, 94)')
	})
})

describe('events', () => {
	it('emit onChange event', () => {
		const onChangeSpy = cy.spy().as('onChangeSpy')
		cy.mount(BlushSelect, { 
			props:
        {
        	...props,
        	onOnChange: onChangeSpy
        }, 
			slots: {
				default: props.default
			}
		})

		cy.get('.blush-select .select-content .custom-select-display').click()
		cy.get('.blush-select .custom-option').eq(1).click() 
		cy.get('@onChangeSpy').should('have.been.calledOnce')
	})
})
