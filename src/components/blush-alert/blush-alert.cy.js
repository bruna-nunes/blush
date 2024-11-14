import BlushAlert from './blush-alert.vue'

const props = {
  title: 'Alert',
  text: 'Descrição',
  type: 'informative',
  showDismiss: false
}

describe('renders', () => {
  it('render blush alert correctly based on provided props', () => {
    cy.mount(BlushAlert, { props })

    cy.get('.blush-alert')
      .should('have.css', 'background-color', 'rgb(242, 242, 242)')
      .should('have.css', 'border-radius', '4px')
      .should('have.css', 'padding', '12px')
      .should('have.css', 'height', '80px')
      .should('have.css', 'border-left-color', 'rgb(81, 81, 81)')
  })
})

describe('events', () => {
  it('emit onDismiss event', () => {
    cy.mount(BlushAlert, { props:
      {
        ...props,
        showDismiss: true,
      },  
    })

    cy.get('.blush-alert img.dismiss-icon').click()
      .then(() => {
        cy.wrap(Cypress.vueWrapper.emitted('onDismiss')).should('have.length', 1)
      })
  })
})
