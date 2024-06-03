import BlushButton from './blush-button.vue'

const props = {
  id: 'button-id',
  name: 'button-name',
  type: 'button',
  label: 'Button',
  size: 'medium',
  variant: 'primary',
  disabled: false,
  autofocus: false,
  block: false,
}

describe('renders', () => {
  it('render blush button correctly based on provided props', () => {
    cy.mount(BlushButton, { props })

    cy.get('.blush-button')
      .should('have.css', 'background-color', 'rgb(214, 162, 53)')
      .should('have.css', 'border-radius', '4px')
      .should('have.css', 'color', 'rgb(242, 242, 242)')
      .should('have.css', 'font-size', '18px')
      .should('have.css', 'font-weight', '600')
      .should('have.css', 'padding', '8px 40px')
      .should('have.css', 'height', '40px')
  })
})

describe('events', () => {
  it('emit onClick event', () => {
    const onClickSpy = cy.spy().as('onClickSpy')
    cy.mount(BlushButton, { props:
      {
        ...props,
        onClick: onClickSpy
      },  
    })

    cy.get('.blush-button').click()
    cy.get('@onClickSpy').should('have.been.calledOnce')
  })
})
