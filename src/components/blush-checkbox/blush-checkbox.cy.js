import BlushCheckbox from './blush-checkbox.vue'

const props = {
  id: 'checkbox-id',
  name: 'checkbox-name',
  label: 'Checkbox label',
  value: 'checkbox1',
  variant: 'primary',
  state: 'normal',
  disabled: false,
  autofocus: false,
  required: false,
  checked: false,
}

describe('renders', () => {
  it('render blush checkbox correctly based on provided props', () => {
    cy.mount(BlushCheckbox, { props })

    cy.get('.blush-checkbox .input-label .input')
      .should('have.css', 'border-radius', '4px')
      .should('have.css', 'width', '16px')
      .should('have.css', 'height', '16px')
    
      cy.get('.blush-checkbox .input-label .input').click()
        .should('have.css', 'background-color', 'rgb(214, 162, 53)')
  })

  it('render blush checkbox hint text if provided', () => {
    cy.mount(BlushCheckbox, { props: 
      { 
        ...props,
        hintText: 'Texto de Hint' 
      }
  })

    cy.get('.blush-checkbox .hint').should('be.visible')
  })

  it('render blush checkbox error text if provided', () => {
    cy.mount(BlushCheckbox, { props: 
      { 
        ...props,
        errorText: 'Texto de Erro' 
      }
  })

    cy.get('.blush-checkbox .error').should('be.visible')
  })
})

describe('events', () => {
  it('emit onChange event', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    cy.mount(BlushCheckbox, { props:
      {
        ...props,
        onChange: onChangeSpy
      },  
    })

    cy.get('.blush-checkbox .input-label .input').click()
    cy.get('@onChangeSpy').should('have.been.calledOnce')
  })

  it('emit onInput event', () => {
    const onInputSpy = cy.spy().as('onInputSpy')
    cy.mount(BlushCheckbox, { props:
      {
        ...props,
        onInput: onInputSpy
      },  
    })

    cy.get('.blush-checkbox .input-label .input').click()
    cy.get('@onInputSpy').should('have.been.calledOnce')
  })
})
